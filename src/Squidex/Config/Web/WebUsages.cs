﻿// ==========================================================================
//  WebUsages.cs
//  Squidex Headless CMS
// ==========================================================================
//  Copyright (c) Squidex Group
//  All rights reserved.
// ==========================================================================

using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using Microsoft.Net.Http.Headers;
// ReSharper disable InvertIf

namespace Squidex.Config.Web
{
    public static class WebUsages
    {
        public static void UseMyCachedStaticFiles(this IApplicationBuilder app)
        {
            app.UseStaticFiles(new StaticFileOptions
            {
                OnPrepareResponse = context =>
                {
                    var response = context.Context.Response;

                    var headers = response.GetTypedHeaders();

                    if (!string.Equals(response.ContentType, "text/html", StringComparison.OrdinalIgnoreCase))
                    {
                        headers.CacheControl = new CacheControlHeaderValue
                        {
                            MaxAge = TimeSpan.FromDays(60)
                        };
                    }
                    else
                    {
                        headers.CacheControl = new CacheControlHeaderValue
                        {
                            NoCache = true
                        };
                    }
                }
            });
        }
    }
}
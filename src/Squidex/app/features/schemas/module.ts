/*
 * Squidex Headless CMS
 *
 * @license
 * Copyright (c) Sebastian Stehle. All rights reserved
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
    HistoryComponent,
    ResolveSchemaGuard,
    SqxFrameworkModule,
    SqxSharedModule
} from 'shared';

import {
    FieldComponent,
    BooleanUIComponent,
    BooleanValidationComponent,
    NumberUIComponent,
    NumberValidationComponent,
    SchemaEditFormComponent,
    SchemaFormComponent,
    SchemaPageComponent,
    SchemasPageComponent,
    StringUIComponent,
    StringValidationComponent
} from './declarations';

const routes: Routes = [
    {
        path: '',
        component: SchemasPageComponent,
        children: [
            {
                path: ''
            },
            {
                path: ':schemaName',
                component: SchemaPageComponent,
                resolve: {
                    schema: ResolveSchemaGuard
                },
                children: [
                    {
                        path: 'history',
                        component: HistoryComponent,
                        data: {
                            channel: 'schemas.{schemaName}'
                        }
                    }
                ]
            }]
    }
];

@NgModule({
    imports: [
        SqxFrameworkModule,
        SqxSharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        FieldComponent,
        BooleanUIComponent,
        BooleanValidationComponent,
        NumberUIComponent,
        NumberValidationComponent,
        SchemaEditFormComponent,
        SchemaFormComponent,
        SchemaPageComponent,
        SchemasPageComponent,
        StringUIComponent,
        StringValidationComponent
    ]
})
export class SqxFeatureSchemasModule { }
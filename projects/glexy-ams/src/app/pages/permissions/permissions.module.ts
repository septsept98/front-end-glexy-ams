import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionsRoutingModule } from './permissions-routing.module';
import { PermissionsListComponent } from './permissions-list/permissions-list.component';
import { PermissionsModifyComponent } from './permissions-modify/permissions-modify.component';


@NgModule({
  declarations: [
    PermissionsListComponent,
    PermissionsModifyComponent
  ],
  imports: [
    CommonModule,
    PermissionsRoutingModule
  ]
})
export class PermissionsModule { }

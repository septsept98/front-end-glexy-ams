import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionDetailRoutingModule } from './permission-detail-routing.module';
import { PermissionDetailListComponent } from './permission-detail-list/permission-detail-list.component';
import { PermissionDetailModifyComponent } from './permission-detail-modify/permission-detail-modify.component';


@NgModule({
  declarations: [
    PermissionDetailListComponent,
    PermissionDetailModifyComponent
  ],
  imports: [
    CommonModule,
    PermissionDetailRoutingModule
  ]
})
export class PermissionDetailModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionDetailRoutingModule } from './permission-detail-routing.module';
import { PermissionDetailListComponent } from './permission-detail-list/permission-detail-list.component';
import { PermissionDetailModifyComponent } from './permission-detail-modify/permission-detail-modify.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    PermissionDetailListComponent,
    PermissionDetailModifyComponent
  ],
  imports: [
    CommonModule,
    PermissionDetailRoutingModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule
  ]
})
export class PermissionDetailModule { }

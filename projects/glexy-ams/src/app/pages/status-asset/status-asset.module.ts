import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusAssetRoutingModule } from './status-asset-routing.module';
import { StatusAssetListComponent } from './status-asset-list/status-asset-list.component';
import { StatusAssetModifyComponent } from './status-asset-modify/status-asset-modify.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    StatusAssetListComponent,
    StatusAssetModifyComponent
  ],
  imports: [
    CommonModule,
    StatusAssetRoutingModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule
  ]
})
export class StatusAssetModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { AssetModifyComponent } from './asset-modify/asset-modify.component';
import { AssetListComponent } from './asset-list/asset-list.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { NgSelect2Module } from 'ng-select2';

@NgModule({
  declarations: [
    AssetModifyComponent,
    AssetListComponent
  ],
  imports: [
    CommonModule,
    AssetRoutingModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    NgSelect2Module
  ]
})
export class AssetModule { }

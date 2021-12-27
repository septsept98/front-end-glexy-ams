import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetTypeRoutingModule } from './asset-type-routing.module';
import { AssetTypeListComponent } from './asset-type-list/asset-type-list.component';
import { AssetTypeModifyComponent } from './asset-type-modify/asset-type-modify.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AssetTypeListComponent,
    AssetTypeModifyComponent
  ],
  imports: [
    CommonModule,
    AssetTypeRoutingModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule
  ]
})
export class AssetTypeModule { }

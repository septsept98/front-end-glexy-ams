import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetTypeRoutingModule } from './asset-type-routing.module';
import { AssetTypeListComponent } from './asset-type-list/asset-type-list.component';
import { AssetTypeModifyComponent } from './asset-type-modify/asset-type-modify.component';


@NgModule({
  declarations: [
    AssetTypeListComponent,
    AssetTypeModifyComponent
  ],
  imports: [
    CommonModule,
    AssetTypeRoutingModule
  ]
})
export class AssetTypeModule { }

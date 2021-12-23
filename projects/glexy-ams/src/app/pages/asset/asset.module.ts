import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetRoutingModule } from './asset-routing.module';
import { AssetModifyComponent } from './asset-modify/asset-modify.component';
import { AssetListComponent } from './asset-list/asset-list.component';


@NgModule({
  declarations: [
    AssetModifyComponent,
    AssetListComponent
  ],
  imports: [
    CommonModule,
    AssetRoutingModule
  ]
})
export class AssetModule { }

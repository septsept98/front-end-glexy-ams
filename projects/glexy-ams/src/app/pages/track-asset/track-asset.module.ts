import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackAssetRoutingModule } from './track-asset-routing.module';
import { TrackAssetComponent } from './track-asset.component';


@NgModule({
  declarations: [
    TrackAssetComponent
  ],
  imports: [
    CommonModule,
    TrackAssetRoutingModule
  ]
})
export class TrackAssetModule { }

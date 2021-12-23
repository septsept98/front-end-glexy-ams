import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationModifyComponent } from './location-modify/location-modify.component';
import { LocationListComponent } from './location-list/location-list.component';


@NgModule({
  declarations: [
    LocationModifyComponent,
    LocationListComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule
  ]
})
export class LocationModule { }

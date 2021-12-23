import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { BrandModifyComponent } from './brand-modify/brand-modify.component';
import { BrandListComponent } from './brand-list/brand-list.component';


@NgModule({
  declarations: [
    BrandModifyComponent,
    BrandListComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule
  ]
})
export class BrandModule { }

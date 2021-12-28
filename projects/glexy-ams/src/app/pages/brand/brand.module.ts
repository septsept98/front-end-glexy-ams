import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandRoutingModule } from './brand-routing.module';
import { BrandModifyComponent } from './brand-modify/brand-modify.component';
import { BrandListComponent } from './brand-list/brand-list.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    BrandModifyComponent,
    BrandListComponent
  ],
  imports: [
    CommonModule,
    BrandRoutingModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    RouterModule
  ]
})
export class BrandModule { }

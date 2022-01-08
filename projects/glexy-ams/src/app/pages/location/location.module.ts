import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationModifyComponent } from './location-modify/location-modify.component';
import { LocationListComponent } from './location-list/location-list.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { NgSelect2Module } from 'ng-select2';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


@NgModule({
  declarations: [
    LocationModifyComponent,
    LocationListComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    NgSelect2Module,
    RouterModule,
    ConfirmDialogModule
  ]
})
export class LocationModule { }

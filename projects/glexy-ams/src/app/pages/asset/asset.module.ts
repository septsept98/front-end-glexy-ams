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
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AssetUpdateComponent } from './asset-update/asset-update/asset-update.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    AssetModifyComponent,
    AssetListComponent,
    AssetUpdateComponent
  ],
  imports: [
    CommonModule,
    AssetRoutingModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    NgSelect2Module,
    RouterModule,
    HttpClientModule,
    ConfirmDialogModule
  ]
})
export class AssetModule { }

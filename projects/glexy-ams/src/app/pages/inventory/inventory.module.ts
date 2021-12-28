import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryModifyComponent } from './inventory-modify/inventory-modify.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InventoryModifyComponent,
    InventoryListComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule
  ]
})
export class InventoryModule { }

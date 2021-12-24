import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelect2Module } from 'ng-select2';

import { StatusTransactionRoutingModule } from './status-transaction-routing.module';
import { StatusTransactionModifyComponent } from './status-transaction-modify/status-transaction-modify.component';
import { StatusTransactionListComponent } from './status-transaction-list/status-transaction-list.component';



@NgModule({
  declarations: [
    StatusTransactionModifyComponent,
    StatusTransactionListComponent
  ],
  imports: [
    CommonModule,
    StatusTransactionRoutingModule,
    NgSelect2Module,
    FormsModule

  ]
})
export class StatusTransactionModule { }

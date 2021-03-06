import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelect2Module } from 'ng-select2';

import { StatusTransactionRoutingModule } from './status-transaction-routing.module';
import { StatusTransactionModifyComponent } from './status-transaction-modify/status-transaction-modify.component';
import { StatusTransactionListComponent } from './status-transaction-list/status-transaction-list.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';



@NgModule({
  declarations: [
    StatusTransactionModifyComponent,
    StatusTransactionListComponent
  ],
  imports: [
    CommonModule,
    StatusTransactionRoutingModule,
    NgSelect2Module,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ConfirmDialogModule

  ]
})
export class StatusTransactionModule { }

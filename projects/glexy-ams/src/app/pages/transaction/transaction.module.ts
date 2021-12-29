import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionCheckOutComponent } from './transaction-check-out/transaction-check-out.component';
import { TransactionCheckInComponent } from './transaction-check-in/transaction-check-in.component';
import { TransactionCheckInListComponent } from './transaction-check-in-list/transaction-check-in-list.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { TransactionCheckInDetailListComponent } from './transaction-check-in-detail-list/transaction-check-in-detail-list.component';
import { NgSelect2Module } from 'ng-select2';


@NgModule({
  declarations: [
    TransactionCheckOutComponent,
    TransactionCheckInComponent,
    TransactionCheckInListComponent,
    TransactionCheckInDetailListComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    NgSelect2Module
  ]
})
export class TransactionModule { }

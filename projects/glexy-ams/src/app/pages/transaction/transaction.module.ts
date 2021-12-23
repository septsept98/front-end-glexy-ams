import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionCheckOutComponent } from './transaction-check-out/transaction-check-out.component';
import { TransactionCheckInComponent } from './transaction-check-in/transaction-check-in.component';
import { TransactionCheckInListComponent } from './transaction-check-in-list/transaction-check-in-list.component';


@NgModule({
  declarations: [
    TransactionCheckOutComponent,
    TransactionCheckInComponent,
    TransactionCheckInListComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule
  ]
})
export class TransactionModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionCheckInDetailListComponent } from './transaction-check-in-detail-list/transaction-check-in-detail-list.component';
import { TransactionCheckInListComponent } from './transaction-check-in-list/transaction-check-in-list.component';
import { TransactionCheckInComponent } from './transaction-check-in/transaction-check-in.component';
import { TransactionCheckOutComponent } from './transaction-check-out/transaction-check-out.component';

const routes: Routes = [
  {
    path : 'transaction/check-out',
    component : TransactionCheckOutComponent
  },
  {
    path : 'transaction/check-in',
    component : TransactionCheckInListComponent
  },
  {
    path : 'transaction/check-in-detail/:id',
    component : TransactionCheckInDetailListComponent
  },
  {
    path : 'transaction/check-in-asset/:id',
    component : TransactionCheckInComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }

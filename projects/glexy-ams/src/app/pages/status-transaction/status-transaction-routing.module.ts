import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusTransactionListComponent } from './status-transaction-list/status-transaction-list.component';

import { StatusTransactionModifyComponent } from './status-transaction-modify/status-transaction-modify.component';

const routes: Routes = [
  {
    path : 'status-trx',
    component : StatusTransactionListComponent
  },
  {
    path : 'status-trx/new',
    component : StatusTransactionModifyComponent
  },
  {
    path : 'status-trx/:id',
    component : StatusTransactionModifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusTransactionRoutingModule { }

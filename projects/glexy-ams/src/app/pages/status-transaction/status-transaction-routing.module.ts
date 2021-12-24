import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusTransactionModifyComponent } from './status-transaction-modify/status-transaction-modify.component';

const routes: Routes = [
  {
    path : 'status-trx/new',
    component : StatusTransactionModifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusTransactionRoutingModule { }

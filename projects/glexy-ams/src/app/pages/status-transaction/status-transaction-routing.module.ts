import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusAssetListComponent } from '../status-asset/status-asset-list/status-asset-list.component';
import { StatusTransactionModifyComponent } from './status-transaction-modify/status-transaction-modify.component';

const routes: Routes = [

  {
    path:'status-transaction/list',
    component : StatusAssetListComponent
  },
  {
    path:'status-transaction/new',
    component : StatusTransactionModifyComponent
  },
  {
    path:'status-transaction/:id',
    component : StatusTransactionModifyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusTransactionRoutingModule { }

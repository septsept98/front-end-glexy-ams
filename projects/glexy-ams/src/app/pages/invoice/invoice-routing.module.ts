import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceModifyComponent } from './invoice-modify/invoice-modify.component';

const routes: Routes = [

  {
    path:'invoice/list',
    component : InvoiceListComponent
  },
  {
    path:'invoice/new',
    component : InvoiceModifyComponent
  },
  {
    path:'invoice/:id',
    component : InvoiceModifyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }

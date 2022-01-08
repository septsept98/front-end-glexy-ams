import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryModifyComponent } from './inventory-modify/inventory-modify.component';

const routes: Routes = [

  {
    path:'inventory',
    component : InventoryListComponent
  },
  {
    path:'inventory/new',
    component : InventoryModifyComponent
  },
  {
    path:'inventory/:id',
    component : InventoryModifyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }

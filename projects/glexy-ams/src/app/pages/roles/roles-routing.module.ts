import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesListComponent } from './roles-list/roles-list.component';
import { RolesModifyComponent } from './roles-modify/roles-modify.component';

const routes: Routes = [

  {
    path:'roles/list',
    component : RolesListComponent
  },
  {
    path:'roles/new',
    component : RolesModifyComponent
  },
  {
    path:'roles/:id',
    component : RolesModifyComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionsListComponent } from './permissions-list/permissions-list.component';
import { PermissionsModifyComponent } from './permissions-modify/permissions-modify.component';

const routes: Routes = [

  {
    path:'permissions',
    component : PermissionsListComponent
  },
  {
    path:'permissions/new',
    component : PermissionsModifyComponent
  },
  {
    path:'permissions/:id',
    component : PermissionsModifyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionsRoutingModule { }

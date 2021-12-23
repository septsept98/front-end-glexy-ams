import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionDetailListComponent } from './permission-detail-list/permission-detail-list.component';
import { PermissionDetailModifyComponent } from './permission-detail-modify/permission-detail-modify.component';

const routes: Routes = [

  {
    path:'permission-detail/list',
    component : PermissionDetailListComponent
  },
  {
    path:'permission-detail/new',
    component : PermissionDetailModifyComponent
  },
  {
    path:'permission-detail/:id',
    component : PermissionDetailModifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionDetailRoutingModule { }

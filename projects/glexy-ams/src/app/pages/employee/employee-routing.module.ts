import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeModifyComponent } from './employee-modify/employee-modify.component';

const routes: Routes = [

  {
    path:'employee/list',
    component : EmployeeListComponent
  },
  {
    path:'asset/new',
    component : EmployeeModifyComponent
  },
  {
    path:'asset/:id',
    component : EmployeeModifyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeModifyComponent } from './employee-modify/employee-modify.component';

const routes: Routes = [

  {
    path:'employee',
    component : EmployeeListComponent
  },
  {
    path:'employee/new',
    component : EmployeeModifyComponent
  },
  {
    path:'employee/:id',
    component : EmployeeModifyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

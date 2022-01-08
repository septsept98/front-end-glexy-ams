import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersModifyComponent } from './users-modify/users-modify.component';

const routes: Routes = [
  
  {
    path:'users',
    component : UsersListComponent
  },
  {
    path:'users/new',
    component : UsersModifyComponent
  },
  {
    path:'users/:id',
    component : UsersModifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

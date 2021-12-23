import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersModifyComponent } from './users-modify/users-modify.component';
import { UsersListComponent } from './users-list/users-list.component';


@NgModule({
  declarations: [
    UsersModifyComponent,
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }

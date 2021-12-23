import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesModifyComponent } from './roles-modify/roles-modify.component';
import { RolesListComponent } from './roles-list/roles-list.component';


@NgModule({
  declarations: [
    RolesModifyComponent,
    RolesListComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule
  ]
})
export class RolesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { RolesModifyComponent } from './roles-modify/roles-modify.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  declarations: [
    RolesModifyComponent,
    RolesListComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    ProgressSpinnerModule
  ]
})
export class RolesModule { }

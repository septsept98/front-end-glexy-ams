import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { GeneralTemplateComponent } from './component/general-template.component';

import { PermissionDetailListComponent } from './permission-detail/permission-detail-list/permission-detail-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GeneralTemplateComponent,
    NotFoundComponent

  ],
  imports: [
    CommonModule,
    NavbarRoutingModule,
    FormsModule
  ]
})
export class NavbarModule { }

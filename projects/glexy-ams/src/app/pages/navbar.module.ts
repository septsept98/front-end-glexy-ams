import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { GeneralTemplateComponent } from './component/general-template.component';


@NgModule({
  declarations: [
    GeneralTemplateComponent
  ],
  imports: [
    CommonModule,
    NavbarRoutingModule
  ]
})
export class NavbarModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyModifyComponent } from './company-modify/company-modify.component';

const routes: Routes = [

  {
    path:'company',
    component : CompanyListComponent
  },
  {
    path:'company/new',
    component : CompanyModifyComponent
  },
  {
    path:'company/:id',
    component : CompanyModifyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }

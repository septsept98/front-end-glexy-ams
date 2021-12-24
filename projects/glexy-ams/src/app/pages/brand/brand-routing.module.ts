import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandListComponent } from './brand-list/brand-list.component';
import { BrandModifyComponent } from './brand-modify/brand-modify.component';

const routes: Routes = [

  {
    path:'brand/list',
    component : BrandListComponent
  },
  {
    path:'brand/new',
    component : BrandModifyComponent
  },
  {
    path:'brand/:id',
    component : BrandModifyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrandRoutingModule { }

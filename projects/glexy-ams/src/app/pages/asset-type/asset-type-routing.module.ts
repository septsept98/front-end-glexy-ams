import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetModifyComponent } from '../asset/asset-modify/asset-modify.component';
import { AssetTypeListComponent } from './asset-type-list/asset-type-list.component';
import { AssetTypeModifyComponent } from './asset-type-modify/asset-type-modify.component';

const routes: Routes = [

  {
    path:'asset-type/list',
    component : AssetTypeListComponent
  },
  {
    path:'asset-type/new',
    component : AssetTypeModifyComponent
  },
  {
    path:'asset-type/:id',
    component : AssetTypeModifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetTypeRoutingModule { }

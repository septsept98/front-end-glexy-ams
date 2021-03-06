import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetModifyComponent } from './asset-modify/asset-modify.component';
import { AssetUpdateComponent } from './asset-update/asset-update/asset-update.component';

const routes: Routes = [

  {
    path:'asset',
    component : AssetListComponent
  },
  {
    path:'asset/new',
    component : AssetModifyComponent
  },
  {
    path:'asset/:id',
    component : AssetUpdateComponent
  },
  {
    path:'asset/invent/:id',
    component : AssetListComponent
  },
  {
    path:'asset/invoice/:invoId',
    component : AssetListComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }

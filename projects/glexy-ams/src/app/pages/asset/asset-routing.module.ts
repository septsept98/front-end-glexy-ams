import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetListComponent } from './asset-list/asset-list.component';
import { AssetModifyComponent } from './asset-modify/asset-modify.component';

const routes: Routes = [

  {
    path:'asset/list',
    component : AssetListComponent
  },
  {
    path:'asset/new',
    component : AssetModifyComponent
  },
  {
    path:'asset/:id',
    component : AssetModifyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssetRoutingModule { }

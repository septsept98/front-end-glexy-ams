import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusAssetListComponent } from './status-asset-list/status-asset-list.component';

import { StatusAssetModifyComponent } from './status-asset-modify/status-asset-modify.component';

const routes: Routes = [

  {
    path:'status-asset/list',
    component : StatusAssetListComponent
  },
  {
    path:'status-asset/new',
    component : StatusAssetModifyComponent
  },
  {
    path:'status-asset/:id',
    component : StatusAssetModifyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusAssetRoutingModule { }

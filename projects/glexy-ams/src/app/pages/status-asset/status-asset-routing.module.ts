import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusAssetListComponent } from './status-asset-list/status-asset-list.component';

const routes: Routes = [
  {
    path : 'status-assets/list',
    component : StatusAssetListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusAssetRoutingModule { }

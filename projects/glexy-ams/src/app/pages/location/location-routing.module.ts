import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationListComponent } from './location-list/location-list.component';
import { LocationModifyComponent } from './location-modify/location-modify.component';

const routes: Routes = [

  {
    path:'location',
    component : LocationListComponent
  },
  {
    path:'location/new',
    component : LocationModifyComponent
  },
  {
    path:'location/:id',
    component : LocationModifyComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }

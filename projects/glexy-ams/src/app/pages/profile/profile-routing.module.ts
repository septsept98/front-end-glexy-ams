import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileModifyPasswordComponent } from './profile-modify-password/profile-modify-password.component';
import { ProfileModifyComponent } from './profile-modify/profile-modify.component';

const routes: Routes = [

  {
    path:'profile/detail',
    component : ProfileDetailComponent
  },
  {
    path:'profile/modify',
    component : ProfileModifyComponent
  },
  {
    path:'profile/password',
    component : ProfileModifyPasswordComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

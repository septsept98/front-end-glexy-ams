import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileModifyComponent } from './profile-modify/profile-modify.component';
import { ProfileModifyPasswordComponent } from './profile-modify-password/profile-modify-password.component';


@NgModule({
  declarations: [
    ProfileDetailComponent,
    ProfileModifyComponent,
    ProfileModifyPasswordComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }

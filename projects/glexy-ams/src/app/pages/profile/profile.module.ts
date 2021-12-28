import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { ProfileModifyComponent } from './profile-modify/profile-modify.component';
import { ProfileModifyPasswordComponent } from './profile-modify-password/profile-modify-password.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    ProfileDetailComponent,
    ProfileModifyComponent,
    ProfileModifyPasswordComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule

  ]
})
export class ProfileModule { }

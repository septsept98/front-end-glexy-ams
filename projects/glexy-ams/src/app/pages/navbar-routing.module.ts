import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralTemplateComponent } from './component/general-template.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : '/glexy/dashboard',
    pathMatch : 'full'
  },
  {
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./roles/roles.module').then(m => m.RolesModule)
  },
  {
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./permissions/permissions.module').then(m => m.PermissionsModule)
  }, {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./users/users.module').then(m => m.UsersModule)
  }, {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./permission-detail/permission-detail.module').then(m => m.PermissionDetailModule)
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }

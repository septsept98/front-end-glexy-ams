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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }

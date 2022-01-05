import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '@services/auth-guard/auth-guard.guard';
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
    loadChildren : () => import('./roles/roles.module').then(m => m.RolesModule),
    canActivate : [AuthGuardGuard]

  },
  {
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./permissions/permissions.module').then(m => m.PermissionsModule),
    canActivate : [AuthGuardGuard]
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./users/users.module').then(m => m.UsersModule),
    canActivate : [AuthGuardGuard]
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./permission-detail/permission-detail.module').then(m => m.PermissionDetailModule),
    canActivate : [AuthGuardGuard]
  },

  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./asset/asset.module').then(m => m.AssetModule),
    canActivate : [AuthGuardGuard]
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./brand/brand.module').then(m => m.BrandModule),
    canActivate : [AuthGuardGuard]
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./company/company.module').then(m => m.CompanyModule),
    canActivate : [AuthGuardGuard]
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./asset-type/asset-type.module').then(m => m.AssetTypeModule),
    canActivate : [AuthGuardGuard]
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./employee/employee.module').then(m => m.EmployeeModule),
    canActivate : [AuthGuardGuard]
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./inventory/inventory.module').then(m => m.InventoryModule),
    canActivate : [AuthGuardGuard]
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./invoice/invoice.module').then(m => m.InvoiceModule),
    canActivate : [AuthGuardGuard]
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./location/location.module').then(m => m.LocationModule),
    canActivate : [AuthGuardGuard]
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./status-asset/status-asset.module').then(m => m.StatusAssetModule),
    canActivate : [AuthGuardGuard]
  }, 
  {
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./status-asset/status-asset.module').then(m => m.StatusAssetModule),
    canActivate : [AuthGuardGuard]
  },
  {
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./status-transaction/status-transaction.module').then(m => m.StatusTransactionModule),
    canActivate : [AuthGuardGuard]
  },
  {
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./transaction/transaction.module').then(m => m.TransactionModule),
    canActivate : [AuthGuardGuard]
  },
  {
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./history/history.module').then(m => m.HistoryModule),
    canActivate : [AuthGuardGuard]
  },
  {
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./profile/profile.module').then(m => m.ProfileModule),
    canActivate : [AuthGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }

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
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./users/users.module').then(m => m.UsersModule)
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./permission-detail/permission-detail.module').then(m => m.PermissionDetailModule)
  },

  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./asset/asset.module').then(m => m.AssetModule)
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./brand/brand.module').then(m => m.BrandModule)
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./company/company.module').then(m => m.CompanyModule)
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./asset-type/asset-type.module').then(m => m.AssetTypeModule)
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./employee/employee.module').then(m => m.EmployeeModule)
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./inventory/inventory.module').then(m => m.InventoryModule)
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./invoice/invoice.module').then(m => m.InvoiceModule)
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./location/location.module').then(m => m.LocationModule)
  }, 
  {  
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./status-asset/status-asset.module').then(m => m.StatusAssetModule)
  }, 
  {  

  {
    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./status-asset/status-asset.module').then(m => m.StatusAssetModule)
  },
  {

    path : '',
    component : GeneralTemplateComponent,
    loadChildren : () => import('./status-transaction/status-transaction.module').then(m => m.StatusTransactionModule)
  }
  
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }

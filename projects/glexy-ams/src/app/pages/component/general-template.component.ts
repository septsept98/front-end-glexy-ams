import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuPermission } from '@constant/menu-permission';
import { PermissionDetail } from '@models/permission-detail';
import { Users } from '@models/users';
import { AuthService } from '@services/auth/auth.service';
import { PermissionDetailService } from '@services/permission-detail/permission-detail.service';
import { UsersService } from '@services/users/users.service';

@Component({
  selector: 'app-general-template',
  templateUrl: './general-template.component.html',
  styleUrls: ['./general-template.component.css']
})
export class GeneralTemplateComponent implements OnInit {

  dashboard: boolean = true
  master: boolean = true
  auth: boolean = true
  data :Users = new Users()
  listMenu :PermissionDetail[] = []
  rolesCode? :string = this.authService.getRoles()
  masterMenu :boolean = false
  assetMenu :boolean = false
  assetStatusMenu :boolean = false
  assetTypeMenu :boolean = false
  statusTransactionMenu :boolean = false
  brandMenu :boolean = false
  locationMenu :boolean = false
  invoiceMenu :boolean = false
  manageUserMenu :boolean = false
  roleMenu :boolean = false
  userMenu :boolean = false
  permissionMenu :boolean = false
  permissionDetailMenu :boolean = false
  transactionMenu :boolean = false
  coMenu :boolean = false
  ciMenu :boolean = false
  historyMenu :boolean = false
  historyTransactionMenu = false
  trackAssetMenu :boolean = false
  assetExpiredMenu :boolean = false
  transactionExpriredMenu :boolean = false
  inventoryMenu :boolean = false
  employeeMenu :boolean = false
  companyMenu :boolean = false
  photo :boolean = false

  constructor(private userService :UsersService, private permissionDetailService :PermissionDetailService,
    private authService :AuthService, private router :Router) { }



  ngOnInit(): void {
    this.initData()
    this.userService.data$?.subscribe(data => this.initData())
  }

  iconOnly(): void {
    const body = document.getElementsByTagName('body')[0]
    if (body?.className.match('sidebar-icon-only')) {
      body?.classList.remove('sidebar-icon-only')
    } else {
      body?.classList.add('sidebar-icon-only')
    }
  }

  openMenu(): void {
    const menu = document.getElementById('sidebar')
    if (menu?.className.match('active')) {
      menu?.classList.remove('active')
    } else {
      menu?.classList.add('active')
    }
  }

  hoverOpen(data: any): void {
    const body = document.getElementsByTagName('body')[0]
    if (body?.className.match('sidebar-icon-only')) {
      data.classList.add('hover-open')
    }
  }

  hoverClose(data: any): void {
    const body = document.getElementsByTagName('body')[0]
    if (body?.className.match('sidebar-icon-only')) {
      data.classList.remove('hover-open')
    }
  }

  onLogOut() :void{

    this.authService.clearStorage()
    this.router.navigateByUrl('/login')
  }
  onUpdatePhoto(){
    
    this.userService.getByIdAuth()?.subscribe(result =>{ this.data = result
      if(this.data.usersImg == null){
        this.photo = true
      }})
  }
  receiveMessage(user :any){
    this.data = user
  }
  initData():void{
    
    this.userService.getByIdAuth()?.subscribe(result =>{ this.data = result
      if(this.data.usersImg){
        this.photo = true
      }
        this.permissionDetailService.getByRoleCode(this.rolesCode)?.subscribe(result => {this.listMenu = result
          if(this.rolesCode == 'SA'){
            this.manageUserMenu = true
            this.userMenu = true
            this.roleMenu = true
            this.permissionMenu = true
            this.permissionDetailMenu = true
            this.masterMenu = true
            this.assetMenu = true
            this.assetStatusMenu = true
            this.assetTypeMenu = true
            this.statusTransactionMenu = true
            this.brandMenu = true
            this.locationMenu = true
            this.invoiceMenu = true
            this.companyMenu = true
            this.employeeMenu = true
            this.transactionMenu =true
            this.ciMenu = true
            this.coMenu = true
            this.historyMenu = true
            this.historyTransactionMenu = true
            this.trackAssetMenu = true
            this.assetExpiredMenu = true
            this.transactionExpriredMenu = true
            this.inventoryMenu = true
          }
          for(let data of this.listMenu){
            
            if(data.permissionsId.code == MenuPermission.ASSET || this.rolesCode == 'SA'){
              this.masterMenu = true
              this.assetMenu = true
            }
            if(data.permissionsId.code == MenuPermission.ASSETSTATUS || this.rolesCode == 'SA'){
              this.masterMenu = true
              this.assetStatusMenu = true
            }
            if(data.permissionsId.code == MenuPermission.ASSETTYPE || this.rolesCode == 'SA'){
              this.masterMenu = true
              this.assetTypeMenu = true
            }
            if(data.permissionsId.code == MenuPermission.STATUSTRANSACTION || this.rolesCode == 'SA'){
              this.masterMenu = true
              this.statusTransactionMenu = true
            }
            if(data.permissionsId.code == MenuPermission.BRAND || this.rolesCode == 'SA'){
              this.masterMenu = true
              this.brandMenu = true
            }
            if(data.permissionsId.code == MenuPermission.LOCATION || this.rolesCode == 'SA'){
              this.masterMenu = true
              this.locationMenu = true
            }
            if(data.permissionsId.code == MenuPermission.INVOICE || this.rolesCode == 'SA'){
              this.masterMenu = true
              this.invoiceMenu = true
            }
            if(data.permissionsId.code == MenuPermission.COMPANY || this.rolesCode == 'SA'){
              this.masterMenu = true
              this.companyMenu = true
            }
            if(data.permissionsId.code == MenuPermission.EMPLOYEE || this.rolesCode == 'SA'){
              this.masterMenu = true
              this.employeeMenu = true
            }
            if(data.permissionsId.code == MenuPermission.CHECKOUT || this.rolesCode == 'SA'){
              this.transactionMenu =true
              this.coMenu = true
            }
            if(data.permissionsId.code == MenuPermission.CHECKIN || this.rolesCode == 'SA'){
              this.transactionMenu =true
              this.ciMenu = true
            }
            if(data.permissionsId.code == MenuPermission.TRANSACTION || this.rolesCode == 'SA'){
              this.historyMenu = true
              this.historyTransactionMenu = true
            }
            if(data.permissionsId.code == MenuPermission.TRACKASSET || this.rolesCode == 'SA'){
              this.historyMenu = true
              this.trackAssetMenu = true
            }
            if(data.permissionsId.code == MenuPermission.ASSETLICENCEEXPIRED || this.rolesCode == 'SA'){
              this.historyMenu = true
              this.assetExpiredMenu = true
            }
            if(data.permissionsId.code == MenuPermission.TRANSACTIONEXPIRED || this.rolesCode == 'SA'){
              this.historyMenu = true
              this.transactionExpriredMenu = true
            }
            if(data.permissionsId.code == MenuPermission.INVENTORY || this.rolesCode == 'SA'){
              this.inventoryMenu = true
            }
          }
        })
      })
  }
}

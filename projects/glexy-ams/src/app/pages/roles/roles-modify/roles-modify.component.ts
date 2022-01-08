import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { RolesInsertReqDto } from '@dto/roles/roles-insert-req-dto';
import { PermissionDetail } from '@models/permission-detail';
import { Permissions } from '@models/permissions';
import { Roles } from '@models/roles';
import { PermissionsService } from '@services/permissions/permissions.service';
import { RolesService } from '@services/roles/roles.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-roles-modify',
  templateUrl: './roles-modify.component.html',
  styleUrls: ['./roles-modify.component.css']
})
export class RolesModifyComponent implements OnInit,OnDestroy {

  permissionList:Permissions[] = []

  permissionListNew:Permissions[] = []

  data:RolesInsertReqDto = new RolesInsertReqDto()
  dataRole:Roles = new Roles()
  permissionDetail:PermissionDetail[] = []
  insertResDto :InsertResDto = new InsertResDto();
  updateResDto :UpdateResDto = new UpdateResDto();
  save:boolean = true;
  roleId?:string|null 
  roleSubs?: Subscription
  listPermissionSubs?: Subscription
  insertRoleSubs?:Subscription
  updateRoleSubs?:Subscription
  
  constructor(private permissionsService :PermissionsService, private rolesService :RolesService,
     private activedRoute :ActivatedRoute, private router :Router) { }

  ngOnInit(): void {

    this.roleId = this.activedRoute.snapshot.paramMap.get('id')

    if(this.roleId){

     this.roleSubs = this.rolesService.getById(this.roleId)?.subscribe(result => {
        this.save = false
        this.data.roles = result
      })

    }

   this.data.roles = this.dataRole
   this.data.data = this.permissionDetail
    this.listPermissionSubs = this.permissionsService.getAll()?.subscribe(result => this.permissionList = result)

  }

  onChange(){
    console.log(this.permissionList)
    
  }

  onCancel() :void{

    this.router.navigateByUrl('/glexy/roles')

  }

  onSubmit(){

    if(this.roleId){

    this.updateRoleSubs =  this.rolesService.update(this.data)?.subscribe(result => this.updateResDto = result)
      this.router.navigateByUrl('/glexy/roles')

    }
    else{

    this.permissionListNew = this.permissionList.filter(x=>x.isActive == true)
    this.data.data = []
    
    for(let i of this.permissionListNew){

     let  permissionDetailData :PermissionDetail = new PermissionDetail()
      permissionDetailData.permissionsId = i
      permissionDetailData.isActive = true
      this.data.data.push(permissionDetailData)
    }
    
    console.log(this.data)
    
  this.insertRoleSubs =  this.rolesService.insert(this.data)?.subscribe(result => this.insertResDto = result)
   this.router.navigateByUrl('/glexy/roles')
  }
  }

  ngOnDestroy(): void {

    this.roleSubs?.unsubscribe()
    this.updateRoleSubs?.unsubscribe()
    this.insertRoleSubs?.unsubscribe()
    this.listPermissionSubs?.unsubscribe()
      
  }

}

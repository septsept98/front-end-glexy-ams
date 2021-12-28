import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { RolesInsertReqDto } from '@dto/roles/roles-insert-req-dto';
import { PermissionDetail } from '@models/permission-detail';
import { Permissions } from '@models/permissions';
import { Roles } from '@models/roles';
import { PermissionsService } from '@services/permissions/permissions.service';
import { RolesService } from '@services/roles/roles.service';

@Component({
  selector: 'app-roles-modify',
  templateUrl: './roles-modify.component.html',
  styleUrls: ['./roles-modify.component.css']
})
export class RolesModifyComponent implements OnInit {

  permissionList:Permissions[] = []

  permissionListNew:Permissions[] = []

  data:RolesInsertReqDto = new RolesInsertReqDto()
  dataRole:Roles = new Roles()
  permissionDetail:PermissionDetail[] = []
  insertResDto :InsertResDto = new InsertResDto();
  updateResDto :UpdateResDto = new UpdateResDto();
  save:boolean = true;
  roleId?:string|null 
  
  constructor(private permissionsService :PermissionsService, private rolesService :RolesService, private activedRoute :ActivatedRoute) { }

  ngOnInit(): void {

    this.roleId = this.activedRoute.snapshot.paramMap.get('id')

    if(this.roleId){

      this.rolesService.getById(this.roleId)?.subscribe(result => {
        this.save = false
        this.data.roles = result
      })

    }

   this.data.roles = this.dataRole
   this.data.data = this.permissionDetail
    this.permissionsService.getAll()?.subscribe(result => this.permissionList = result)

  }

  onChange(){
    console.log(this.permissionList)
    
  }

  onSubmit(){

    if(this.roleId){

      this.rolesService.update(this.data)?.subscribe(result => this.updateResDto = result)

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
    
   this.rolesService.insert(this.data)?.subscribe(result => this.insertResDto = result)
  }
  }

}

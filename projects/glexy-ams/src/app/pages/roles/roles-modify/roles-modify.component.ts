import { Component, OnInit } from '@angular/core';
import { Permissions } from '@models/permissions';

@Component({
  selector: 'app-roles-modify',
  templateUrl: './roles-modify.component.html',
  styleUrls: ['./roles-modify.component.css']
})
export class RolesModifyComponent implements OnInit {

  permissionList:Permissions[] = []

  permissionListNew:Permissions[] = []

  constructor() { }

  ngOnInit(): void {

    this.permissionList = [
      {namePermission:'transaction',isActive:true},
      {namePermission:'master',isActive:true}

    ]

  }

  onChange(){
    console.log(this.permissionList)
  }

  onSubmit(){

    this.permissionListNew = this.permissionList.filter(x=>x.isActive == true)
    console.log(this.permissionListNew)
  }

}

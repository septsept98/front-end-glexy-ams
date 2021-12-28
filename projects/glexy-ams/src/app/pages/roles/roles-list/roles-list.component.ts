import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Roles } from '@models/roles';
import { RolesService } from '@services/roles/roles.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  listRoles: Roles[] = []
  selectedRoles: Roles[] = []
 

  private unSubs?: Subscription;

  constructor(private rolesServices :RolesService, private router:Router) { }

  ngOnInit(): void {

    this.rolesServices.getAll()?.subscribe(result => this.listRoles = result)

  }

  onCreate():void{

    this.router.navigateByUrl('/glexy/roles/new')
  }

  onUpdate(id :String):void{

    this.router.navigateByUrl(`/glexy/roles/${id}`)

  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

}



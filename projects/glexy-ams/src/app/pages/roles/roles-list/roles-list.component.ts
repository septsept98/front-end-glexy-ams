import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteResDto } from '@dto/all-respons/delete-res-dto';
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
  deleteResDto :DeleteResDto = new DeleteResDto()

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

  onDelete(id :string):void{

    this.rolesServices.delete(id)?.subscribe(result => {this.deleteResDto = result
      this.rolesServices.getAll()?.subscribe(result => this.listRoles = result)
    })
  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

}



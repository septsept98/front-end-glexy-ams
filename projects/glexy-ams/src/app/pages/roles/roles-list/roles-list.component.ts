import { Component, OnDestroy, OnInit } from '@angular/core';
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
export class RolesListComponent implements OnInit, OnDestroy {

  listRoles: Roles[] = []
  selectedRoles: Roles[] = []
  deleteResDto: DeleteResDto = new DeleteResDto()

  private listRoleSubs?: Subscription;
  private deleteRoleSubs?: Subscription;
  private listRoleDelSubs?: Subscription;

  constructor(private rolesServices: RolesService, private router: Router) { }

  ngOnInit(): void {

    this.listRoleSubs = this.rolesServices.getAll()?.subscribe(result => {
      this.listRoles = result
    })

  }

  onCreate(): void {

    this.router.navigateByUrl('/glexy/roles/new')
  }

  onUpdate(id: String): void {

    this.router.navigateByUrl(`/glexy/roles/${id}`)

  }

  onDelete(id: string): void {
    this.rolesServices.getById(id)?.subscribe(result => {
      if (confirm("Are you sure to delete " + result.nameRole)) {
    this.deleteRoleSubs = this.rolesServices.delete(id)?.subscribe(result => {
      this.deleteResDto = result
      this.listRoleDelSubs = this.rolesServices.getAll()?.subscribe(result => this.listRoles = result)
    })
  }})
  }

  ngOnDestroy(): void {
    this.listRoleSubs?.unsubscribe()
    this.deleteRoleSubs?.unsubscribe()
    this.listRoleDelSubs?.unsubscribe()
  }

}



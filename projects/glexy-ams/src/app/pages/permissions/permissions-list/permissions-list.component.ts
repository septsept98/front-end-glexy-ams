import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteResDto } from '@dto/all-respons/delete-res-dto';
import { Permissions } from '@models/permissions';
import { PermissionsService } from '@services/permissions/permissions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-permissions-list',
  templateUrl: './permissions-list.component.html',
  styleUrls: ['./permissions-list.component.css']
})
export class PermissionsListComponent implements OnInit {

  listPermission: Permissions[] = []
  selectedPermission: Permissions[] = []
  deleteResDto :DeleteResDto = new DeleteResDto()

  private unSubs?: Subscription;

  constructor(private permissionsService :PermissionsService, private router:Router) { }

  ngOnInit(): void {

    this.permissionsService.getAll()?.subscribe(result => this.listPermission = result)

  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

  onCreate(){

    this.router.navigateByUrl('/glexy/permissions/new')
  }

  onUpdate(id :String):void{

    this.router.navigateByUrl(`/glexy/permissions/${id}`)

  }

  onDelete(id :string):void{

    this.permissionsService.delete(id)?.subscribe(result => {this.deleteResDto = result
      this.permissionsService.getAll()?.subscribe(result => this.listPermission = result)
    })
  }

}

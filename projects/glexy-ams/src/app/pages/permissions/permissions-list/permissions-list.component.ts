import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
export class PermissionsListComponent implements OnInit, OnDestroy {

  listPermission: Permissions[] = []
  selectedPermission: Permissions[] = []
  deleteResDto: DeleteResDto = new DeleteResDto()

  dataSubs?: Subscription
  deleteSubs?: Subscription
  dataDelSubs?: Subscription

  constructor(private permissionsService: PermissionsService, private router: Router,
    title :Title) { 
      title.setTitle("Permission")
    }

  ngOnInit(): void {

    this.dataSubs = this.permissionsService.getAll()?.subscribe(result => {
      this.listPermission = result
    })

  }

  onCreate() {

    this.router.navigateByUrl('/glexy/permissions/new')
  }

  onUpdate(id: String): void {

    this.router.navigateByUrl(`/glexy/permissions/${id}`)

  }

  onDelete(id: string): void {
      this.permissionsService.getById(id)?.subscribe(result => {
        if (confirm("Are you sure to delete " + result.namePermission)) {
      this.deleteSubs = this.permissionsService.delete(id)?.subscribe(result => {
      this.deleteResDto = result
      this.dataDelSubs = this.permissionsService.getAll()?.subscribe(result => this.listPermission = result)
    })
  }})
  }

  ngOnDestroy(): void {
    this.dataSubs?.unsubscribe()
    this.deleteSubs?.unsubscribe()
    this.dataDelSubs?.unsubscribe()
  }

}

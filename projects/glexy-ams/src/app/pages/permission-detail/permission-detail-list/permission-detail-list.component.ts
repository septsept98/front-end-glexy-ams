import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DeleteResDto } from '@dto/all-respons/delete-res-dto';
import { PermissionDetail } from '@models/permission-detail';
import { PermissionDetailService } from '@services/permission-detail/permission-detail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-permission-detail-list',
  templateUrl: './permission-detail-list.component.html',
  styleUrls: ['./permission-detail-list.component.css']
})
export class PermissionDetailListComponent implements OnInit, OnDestroy {

  listPermissionDetail: PermissionDetail[] = []
  selectedPermissionDetail: PermissionDetail[] = []
  deleteResDto: DeleteResDto = new DeleteResDto()

  dataSubs?: Subscription
  deleteSubs?: Subscription
  dataDelSubs?: Subscription

  constructor(private permissionDetailService: PermissionDetailService, private router: Router,
    private title :Title) {
      title.setTitle("Permission Detail")
     }

  ngOnInit(): void {

    this.dataSubs = this.permissionDetailService.getAll()?.subscribe(result => {
      this.listPermissionDetail = result
    })

  }

  onCreate(): void {

    this.router.navigateByUrl('/glexy/permission-detail/new')

  }

  onUpdate(id: string): void {

    this.router.navigateByUrl(`/glexy/permission-detail/${id}`)

  }

  onDelete(id: string): void {
      this.permissionDetailService.getById(id)?.subscribe(result => {
        if (confirm("Are you sure to delete " + result.rolesId.nameRole+` & `+result.permissionsId.namePermission)) {
      this.deleteSubs = this.permissionDetailService.delete(id)?.subscribe(result => {
      this.deleteResDto = result
      this.dataDelSubs = this.permissionDetailService.getAll()?.subscribe(result => this.listPermissionDetail = result)
    })
  }})
  }

  ngOnDestroy(): void {
    this.dataSubs?.unsubscribe()
    this.deleteSubs?.unsubscribe()
    this.dataDelSubs?.unsubscribe()
  }

}

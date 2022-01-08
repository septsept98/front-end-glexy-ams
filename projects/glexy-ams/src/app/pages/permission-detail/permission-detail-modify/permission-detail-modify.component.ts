import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { PermissionDetail } from '@models/permission-detail';
import { Permissions } from '@models/permissions';
import { Roles } from '@models/roles';
import { PermissionDetailService } from '@services/permission-detail/permission-detail.service';
import { PermissionsService } from '@services/permissions/permissions.service';
import { RolesService } from '@services/roles/roles.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-permission-detail-modify',
  templateUrl: './permission-detail-modify.component.html',
  styleUrls: ['./permission-detail-modify.component.css']
})
export class PermissionDetailModifyComponent implements OnInit, OnDestroy {

  data: PermissionDetail = new PermissionDetail()
  roles: Roles = new Roles()
  permission: Permissions = new Permissions()
  insertResDto: InsertResDto = new InsertResDto()
  updateResDto: UpdateResDto = new UpdateResDto()
  permissionDetailId?: string | null
  listRole: Roles[] = []
  listPermission: Permissions[] = []
  save: boolean = true
  dataSubs?: Subscription
  insertSubs?: Subscription
  updateSubs?: Subscription
  listRoleSubs?: Subscription
  listPermissionSubs?: Subscription

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private permissionDetailService: PermissionDetailService,
    private roleService: RolesService, private permissionService: PermissionsService,
    private title :Title) {
      title.setTitle("Permission Detail Create")
     }

  ngOnInit(): void {

    this.permissionDetailId = this.activatedRoute.snapshot.paramMap.get('id')

    if (this.permissionDetailId) {
      this. title.setTitle("Permission Detail Update")
      this.dataSubs = this.permissionDetailService.getById(this.permissionDetailId)?.subscribe(result => {
        this.save = false
        this.data = result
      })

    }

    this.data.permissionsId = this.permission
    this.data.rolesId = this.roles

    this.listRoleSubs = this.roleService.getAll()?.subscribe(result => this.listRole = result)
    this.listPermissionSubs = this.permissionService.getAll()?.subscribe(result => this.listPermission = result)
  }

  onCancel(): void {

    this.router.navigateByUrl('/glexy/permission-detail')

  }

  add(): void {
    if (this.permissionDetailId) {

      this.updateSubs = this.permissionDetailService.update(this.data)?.subscribe(result => this.updateResDto = result)
      this.router.navigateByUrl('/glexy/permission-detail')
    } else {
      this.insertSubs = this.permissionDetailService.insert(this.data)?.subscribe(result => {
        this.insertResDto = result
        this.router.navigateByUrl('/glexy/permission-detail')
        console.log(this.insertResDto)
      })
    }
  }

  ngOnDestroy(): void {

    this.dataSubs?.unsubscribe()
    this.updateSubs?.unsubscribe()
    this.insertSubs?.unsubscribe()
    this.listRoleSubs?.unsubscribe()
    this.listPermissionSubs?.unsubscribe()

  }

}

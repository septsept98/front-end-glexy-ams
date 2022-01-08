import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { Permissions } from '@models/permissions';
import { PermissionsService } from '@services/permissions/permissions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-permissions-modify',
  templateUrl: './permissions-modify.component.html',
  styleUrls: ['./permissions-modify.component.css']
})
export class PermissionsModifyComponent implements OnInit, OnDestroy {

  data: Permissions = new Permissions()
  insertResDto: InsertResDto = new InsertResDto()
  updateResDto: UpdateResDto = new UpdateResDto()
  save: boolean = true
  permissionId?: string | null
  dataSubs?: Subscription
  insertSubs?: Subscription
  updateSubs?: Subscription

  constructor(private permissionService: PermissionsService, private activedRoute: ActivatedRoute,
    private router: Router, private title :Title) {
      title.setTitle("Permission Create")
     }

  ngOnInit(): void {

    this.permissionId = this.activedRoute.snapshot.paramMap.get('id')

    if (this.permissionId) {
      this.title.setTitle("Permission Update")
      this.dataSubs = this.permissionService.getById(this.permissionId)?.subscribe(result => {
        this.save = false
        this.data = result
      })

    }

  }

  onCancel(): void {

    this.router.navigateByUrl('/glexy/permissions/list')

  }

  onSubmit() {

    if (this.permissionId) {
      this.updateSubs = this.permissionService.update(this.data)?.subscribe(result => this.updateResDto = result)
      this.router.navigateByUrl('/glexy/permissions/list')
    }
    else {

      this.insertSubs = this.permissionService.insert(this.data)?.subscribe(result => this.insertResDto = result)
      this.router.navigateByUrl('/glexy/permissions/list')
    }
  }

  ngOnDestroy(): void {

    this.dataSubs?.unsubscribe()
    this.updateSubs?.unsubscribe()
    this.insertSubs?.unsubscribe()

  }

}

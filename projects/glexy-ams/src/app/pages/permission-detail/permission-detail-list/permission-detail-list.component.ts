import { Component, OnInit } from '@angular/core';
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
export class PermissionDetailListComponent implements OnInit {

  listPermissionDetail: PermissionDetail[] = []
  selectedPermissionDetail: PermissionDetail[] = []
  deleteResDto :DeleteResDto = new DeleteResDto()

  private unSubs?: Subscription;

  constructor(private permissionDetailService :PermissionDetailService, private router :Router) { }

  ngOnInit(): void {

    this.permissionDetailService.getAll()?.subscribe(result => this.listPermissionDetail = result)

  }

  onCreate() :void{

    this.router.navigateByUrl('/glexy/permission-detail/new')

  }

  onUpdate(id :string) :void{

    this.router.navigateByUrl(`/glexy/permission-detail/${id}`)

  }

  onDelete(id :string) :void{

    this.permissionDetailService.delete(id)?.subscribe(result =>{this.deleteResDto = result
    this.permissionDetailService.getAll()?.subscribe(result => this.listPermissionDetail = result)
    } )
  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

}

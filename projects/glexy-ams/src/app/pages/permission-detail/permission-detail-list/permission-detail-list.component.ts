import { Component, OnInit } from '@angular/core';
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

  private unSubs?: Subscription;

  constructor(private permissionDetailService :PermissionDetailService) { }

  ngOnInit(): void {

    this.permissionDetailService.getAll()?.subscribe(result => this.listPermissionDetail = result)

  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

}

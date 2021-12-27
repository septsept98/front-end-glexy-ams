import { Component, OnInit } from '@angular/core';
import { PermissionDetail } from '@models/permission-detail';
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

  constructor() { }

  ngOnInit(): void {

    this.listPermissionDetail = [

      {rolesId:{nameRole:'admin'}, permissionsId:{namePermission:'transaction'}}
    ]

  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

}

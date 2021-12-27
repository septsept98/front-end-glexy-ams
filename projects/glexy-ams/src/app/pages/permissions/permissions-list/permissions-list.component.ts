import { Component, OnInit } from '@angular/core';
import { Permissions } from '@models/permissions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-permissions-list',
  templateUrl: './permissions-list.component.html',
  styleUrls: ['./permissions-list.component.css']
})
export class PermissionsListComponent implements OnInit {

  listPermission: Permissions[] = []
  selectedPermission: Permissions[] = []

  private unSubs?: Subscription;

  constructor() { }

  ngOnInit(): void {

    this.listPermission = [
      {namePermission:'Transaction',code:'TR'}
    ]

  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

}

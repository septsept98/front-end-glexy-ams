import { Component, OnInit } from '@angular/core';
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

  private unSubs?: Subscription;

  constructor(private permissionsService :PermissionsService) { }

  ngOnInit(): void {

    this.permissionsService.getAll()?.subscribe(result => this.listPermission = result)

  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

}

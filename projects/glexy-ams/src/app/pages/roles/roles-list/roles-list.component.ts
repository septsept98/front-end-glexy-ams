import { Component, OnInit } from '@angular/core';
import { Roles } from '@models/roles';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {

  listRoles: Roles[] = []
  selectedRoles: Roles[] = []

  private unSubs?: Subscription;

  constructor() { }

  ngOnInit(): void {

    this.listRoles = [
      {code: 'SA', nameRole:'super admin'},
      {code: 'ADM', nameRole:'admin'},
      {code: 'HR', nameRole:'human resource'}
    ]

  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

}



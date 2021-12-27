import { Component, OnInit } from '@angular/core';
import { Users } from '@models/users';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  listUsers: Users[] = []
  selectedUsers: Users[] = []

  private unSubs?: Subscription;

  constructor() { }

  ngOnInit(): void {

    this.listUsers = [
      {email:'glenn9828@gmail.com',employeeId:{nameEmployee:'glenn',nip:'321726372',phoneNumber:'0895610516196',companyId:{names:'linov'}},rolesId:{nameRole:'admin'}}
    ]

  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

}


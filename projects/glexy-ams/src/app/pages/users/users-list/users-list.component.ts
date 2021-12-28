import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Users } from '@models/users';
import { UsersService } from '@services/users/users.service';
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

  constructor(private usersService :UsersService) { }

  ngOnInit(): void {

    this.usersService.getAll()?.subscribe(result => this.listUsers = result)

  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

}


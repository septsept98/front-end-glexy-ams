import { Component, OnInit } from '@angular/core';
import { Users } from '@models/users';
import { UsersService } from '@services/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-modify-password',
  templateUrl: './profile-modify-password.component.html',
  styleUrls: ['./profile-modify-password.component.css']
})
export class ProfileModifyPasswordComponent implements OnInit {

  users :Users = new Users()

  private unSubs?: Subscription;

  constructor(private usersSevice :UsersService) { }

  ngOnInit(): void {

    this.usersSevice.getByIdAuth()?.subscribe(result => {this.users = result
      console.log(result)} )

  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

}

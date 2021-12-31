import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '@models/users';
import { UsersService } from '@services/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit, OnDestroy {

  users :Users = new Users()

  userSubs?: Subscription;

  constructor(private usersSevice :UsersService,private router :Router) { }

  ngOnInit(): void {

   this.userSubs = this.usersSevice.getByIdAuth()?.subscribe(result => {this.users = result
    console.log(result)} )
  
  }

  onModify(){
    this.router.navigateByUrl('/glexy/profile/modify')
  }

  onPassword(){

    this.router.navigateByUrl('/glexy/profile/password')

  }

  ngOnDestroy(): void {
    this.userSubs?.unsubscribe()
  }


}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { Users } from '@models/users';
import { UsersService } from '@services/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-modify-password',
  templateUrl: './profile-modify-password.component.html',
  styleUrls: ['./profile-modify-password.component.css']
})
export class ProfileModifyPasswordComponent implements OnInit, OnDestroy {

  users :Users = new Users()
  newPassword :string = ""
  confirm :string = ""
  updateResDto :UpdateResDto = new UpdateResDto()
  userSubs? :Subscription

  constructor(private usersSevice :UsersService, private router :Router,
    private title :Title) {
      title.setTitle("Profile Update Password")
     }

  ngOnInit(): void {

  this.userSubs =  this.usersSevice.getByIdAuth()?.subscribe(result => {this.users = result
      console.log(result)} )

  }

  onUpdate(){

    if(this.newPassword == this.confirm && this.newPassword != ""){
      this.users.pass = this.newPassword
      this.usersSevice.updatePassword(this.users)?.subscribe(result => this.updateResDto = result)
      this.router.navigateByUrl('/glexy/profile/detail')
    }

  }

  onCancel(){

    this.router.navigateByUrl('/glexy/profile/detail')
  }

  ngOnDestroy(): void {
    this.userSubs?.unsubscribe()
  }

}

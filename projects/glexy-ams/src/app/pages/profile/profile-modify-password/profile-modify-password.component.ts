import { Component, OnInit } from '@angular/core';
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
export class ProfileModifyPasswordComponent implements OnInit {

  users :Users = new Users()
  newPassword :string = ""
  confirm :string = ""
  updateResDto :UpdateResDto = new UpdateResDto()

  private unSubs?: Subscription;

  constructor(private usersSevice :UsersService, private router :Router) { }

  ngOnInit(): void {

    this.usersSevice.getByIdAuth()?.subscribe(result => {this.users = result
      console.log(result)} )

  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
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

}

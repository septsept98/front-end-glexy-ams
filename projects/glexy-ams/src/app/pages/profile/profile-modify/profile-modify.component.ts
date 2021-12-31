import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { Users } from '@models/users';
import { UsersService } from '@services/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-modify',
  templateUrl: './profile-modify.component.html',
  styleUrls: ['./profile-modify.component.css']
})
export class ProfileModifyComponent implements OnInit, OnDestroy {

  users :Users = new Users()
  updateResDto :UpdateResDto = new UpdateResDto()

  userSubs?: Subscription;

  constructor(private usersSevice :UsersService,private router :Router) { }

  ngOnInit(): void {

  this.userSubs =  this.usersSevice.getByIdAuth()?.subscribe(result => {this.users = result
      console.log(result)} )

  }

  onUpdate(){

    this.usersSevice.update(this.users)?.subscribe(result=> this.updateResDto = result)
    this.router.navigateByUrl('/glexy/profile/detail')
  }

  onCancel(){
    this.router.navigateByUrl('/glexy/profile/detail')
  }

  ngOnDestroy(): void {
    this.userSubs?.unsubscribe()
  }

}

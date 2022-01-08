import { Component, OnDestroy, OnInit, EventEmitter, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { Users } from '@models/users';
import { AuthService } from '@services/auth/auth.service';
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

  selectedFile!:FileList
  file! :File |null 
  updateResDto :UpdateResDto = new UpdateResDto()
  photo :boolean = false
  change :boolean = true
  
  constructor(private usersService :UsersService,private router :Router,
    private title :Title) {
      title.setTitle("Profile")
     }

  ngOnInit(): void {

   this.userSubs = this.usersService.getByIdAuth()?.subscribe(result => {this.users = result
    console.log(result)
    if(this.users.usersImg){
      this.photo = true
    }
  } )
  
  }

  onModify() :void{
    this.router.navigateByUrl('/glexy/profile/modify')
  }

  onPassword() :void{

    this.router.navigateByUrl('/glexy/profile/password')

  }

  selectFile(event :any) :void{

    this.selectedFile = event.target.files
    
  }

  onUpdatePhoto(){
    
    this.file = this.selectedFile?.item(0)
     this.usersService.updatePhoto(this.users,this.file)?.subscribe(result =>{
      this.updateResDto = result
      this.photo = true
      if(result.msg == 'ok'){
        this.usersService.updateProfilePicture()
      }
      this.userSubs = this.usersService.getByIdAuth()?.subscribe(result => {this.users = result
        console.log(result)
       this.usersService.updateProfilePicture ()
      } )
    })
  }

  onChangePhoto(){
    this.change = !this.change
  }

  ngOnDestroy(): void {
    this.userSubs?.unsubscribe()
  }

}

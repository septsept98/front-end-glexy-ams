import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginReqDto } from '@dto/users/login-req-dto';
import { AuthService } from '@services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  token? :string
  counter = 0
  data :LoginReqDto = new LoginReqDto()

  constructor(private router: Router, private authService :AuthService) { }

  ngOnInit(): void {

  }

  login(): void {
    this.authService.login(this.data).subscribe(result=>{
      this.authService.saveUserData(result)
      this.authService.savePermission()
      this.token = this.authService.getToken()
      console.log(this.token)
      this.router.navigateByUrl('/glexy/dashboard')
    
    })
    
  }

  onShow(): void {
    const btn = document.getElementById('show-pass')
    const icon = document.getElementById('icon-eye')
    if(this.counter == 0) {
      icon?.classList.remove('fa-eye')
      icon?.classList.add('fa-eye-slash')
      btn?.removeAttribute('type')
      btn?.setAttribute('type', 'text')
      this.counter = 1
    } else {
      icon?.classList.remove('fa-eye-slash')
      icon?.classList.add('fa-eye')
      btn?.removeAttribute('type')
      btn?.setAttribute('type', 'password')
      this.counter = 0
    }
  }

  hasVal(data: any): void {
    if (data.value != "") {
      data.classList.add('has-val');
    }
    else {
      data.classList.remove('has-val');
    }
  }

}

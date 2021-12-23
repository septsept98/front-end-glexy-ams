import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../constance/root';
import { LoginReqDto } from '../../dto/users/login-req-dto';
import { LoginResDto } from '../../dto/users/login-res-dto';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http : HttpClient) { }
  login(dataLogin : LoginReqDto):Observable<LoginResDto>{
    return this.http.post<LoginResDto>(`${baseUrl}login`, dataLogin)
  }
  saveUserData(data:LoginResDto):void{
    localStorage.setItem('data',JSON.stringify(data)) //setItem(key,value)
  }
  getToken():string|undefined{
    const data = localStorage.getItem('data')
    if(data){
      const result:LoginResDto = JSON.parse(data)
      if(result.token) return result.token
    }
    return undefined
  }
  clearStorage():void{
    localStorage.clear()
  }
}

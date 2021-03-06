import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from '@constant/root';
import { LoginReqDto } from '@dto/users/login-req-dto';
import { LoginResDto } from '@dto/users/login-res-dto';
import { PermissionDetail } from '@models/permission-detail';
import { PermissionDetailService } from '@services/permission-detail/permission-detail.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient, private permissionDetailService :PermissionDetailService) { }

  login(data :LoginReqDto) :Observable<LoginResDto>{

    return this.http.post<LoginResDto>(`${baseUrl}login`,data)
  }

  saveUserData(data :LoginResDto):void{

    localStorage.setItem('data',JSON.stringify(data))
    

  }

  savePermission():void{
    let list :PermissionDetail[] = []
    this.permissionDetailService.getByRoleCode(this.getRoles())?.subscribe(result => list = result)
    localStorage.setItem('permission',JSON.stringify(list))
    

  }

  getPermission() :PermissionDetail[]|undefined{
    let permission = localStorage.getItem('permission')
    if(permission){
      let list :PermissionDetail[] = JSON.parse(permission)
      return list
    }
    return undefined
  }

  getToken():string|undefined{
    let data = localStorage.getItem('data')
    if(data){
      let result:LoginResDto = JSON.parse(data)
      if(result){
        return result.token
      }
    }
    return undefined
  }

  getRoles():string|undefined{
    let data = localStorage.getItem('data')
    if(data){
      let result :LoginResDto = JSON.parse(data)
      if(result){
        return result.rolesCode
      }
    }
    return undefined
  }

 

  clearStorage():void{

    localStorage.clear()

  }
}

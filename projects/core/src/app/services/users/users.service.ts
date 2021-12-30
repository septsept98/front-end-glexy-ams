import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { baseUrl } from '../../constance/root';
import { Users } from '../../model/users';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Users[]> | undefined {
    return this.http.get<Users[]>(`${baseUrl}users/`)??""
  }

  getById(id : string) : Observable<Users> | undefined {
    return this.http.get<Users>(`${baseUrl}users/${id}`)??""
  }

  getByNip(nip : string) : Observable<Users> | undefined {
    return this.http.get<Users>(`${baseUrl}users/nip/?employeeId.nip=${nip}`)??""
  }

  getByEmail(id : string) : Observable<Users> | undefined {
    return this.http.get<Users>(`${baseUrl}users/email/${id}`)??""
  }

  updatePassword(data : Users) : Observable<UpdateResDto> | undefined {
    return this.http.post<UpdateResDto>(`${baseUrl}users/password`, data)??""
  }

  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${baseUrl}users/${id}`)??""
  }

  getByIdAuth() : Observable<Users> | undefined {
    return this.http.get<Users>(`${baseUrl}users/profile`)??""
  }

  insert(data : Users, file: File | null) : Observable<InsertResDto> | undefined {
    const formData : FormData = new FormData()
    formData.append('data', JSON.stringify(data))
    formData.append('file', file!)
    console.log('asdasdfgbd '+ file)
    return this.http.post<InsertResDto>(`${baseUrl}users/`, formData)??""
  }

  update(data : Users) : Observable<UpdateResDto> | undefined {
    
    return this.http.put<UpdateResDto>(`${baseUrl}users/`, data)??""
  }
  
}

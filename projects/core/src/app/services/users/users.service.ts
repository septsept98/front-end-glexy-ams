import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { roots } from '../../constance/root';
import { Users } from '../../model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Users> | undefined {
    return this.http.get<Users>(`${roots}users/`)??""
  }
  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${roots}users/${id}`)??""
  }
}

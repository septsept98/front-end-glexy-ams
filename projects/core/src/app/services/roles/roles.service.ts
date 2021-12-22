import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { Roles } from '../../model/roles';
import { roots } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Roles> | undefined {
    return this.http.get<Roles>(`${roots}roles/`)??""
  }
  insert(data : Roles) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${roots}roles/`, data)??""
  }
  update(data : Roles): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${roots}roles/`, data)??""
  }
  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${roots}roles/${id}`)??""
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { Roles } from '../../model/roles';
import { baseUrl } from '../../constance/root';
import { RolesInsertReqDto } from '../../dto/roles/roles-insert-req-dto';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Roles[]> | undefined {
    return this.http.get<Roles[]>(`${baseUrl}roles/`)??""
  }

  insert(data : RolesInsertReqDto) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${baseUrl}roles/`, data)??""
  }

  update(data : RolesInsertReqDto): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${baseUrl}roles/`, data)??""
  }

  getById(id : string) : Observable<Roles> | undefined {
    return this.http.get<Roles>(`${baseUrl}roles/${id}`)??""
  }

  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${baseUrl}roles/${id}`)??""
  }
}

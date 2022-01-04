import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { PermissionDetail } from '../../model/permission-detail';
import { baseUrl } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class PermissionDetailService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<PermissionDetail[]> | undefined {
    return this.http.get<PermissionDetail[]>(`${baseUrl}permission-details/`)??""
  }

  insert(data : PermissionDetail) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${baseUrl}permission-details/`, data)??""
  }

  update(data : PermissionDetail): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${baseUrl}permission-details/`, data)??""
  }

  getByRoleCode(code? : string) : Observable<PermissionDetail[]> | undefined {
    return this.http.get<PermissionDetail[]>(`${baseUrl}permission-details/role/${code}`)??""
  }

  getById(id : string) : Observable<PermissionDetail> | undefined {
    return this.http.get<PermissionDetail>(`${baseUrl}permission-details/${id}`)??""
  }

  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${baseUrl}permission-details/${id}`)??""
  }
}

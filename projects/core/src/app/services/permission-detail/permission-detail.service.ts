import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { PermissionDetail } from '../../model/permission-detail';
import { roots } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class PermissionDetailService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<PermissionDetail> | undefined {
    return this.http.get<PermissionDetail>(`${roots}permission-details/`)??""
  }
  insert(data : PermissionDetail) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${roots}permission-details/`, data)??""
  }
  update(data : PermissionDetail): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${roots}permission-details/`, data)??""
  }
  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${roots}permission-details/${id}`)??""
  }
}

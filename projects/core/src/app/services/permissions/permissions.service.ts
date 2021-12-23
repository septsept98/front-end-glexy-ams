import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { Permissions } from '../../model/permissions';
import { baseUrl } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Permissions[]> | undefined {
    return this.http.get<Permissions[]>(`${baseUrl}permissionss/`)??""
  }

  insert(data : Permissions) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${baseUrl}permissionss/`, data)??""
  }

  update(data : Permissions): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${baseUrl}permissionss/`, data)??""
  }

  getById(id : string) : Observable<Permissions> | undefined {
    return this.http.get<Permissions>(`${baseUrl}permissionss/${id}`)??""
  }

  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${baseUrl}permissionss/${id}`)??""
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { Permissions } from '../../model/permissions';
import { roots } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Permissions> | undefined {
    return this.http.get<Permissions>(`${roots}permissionss/`)??""
  }
  insert(data : Permissions) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${roots}permissionss/`, data)??""
  }
  update(data : Permissions): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${roots}permissionss/`, data)??""
  }
  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${roots}permissionss/${id}`)??""
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { StatusAsset } from '../../model/status-asset';
import { roots } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class StatusAssetService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<StatusAsset> | undefined {
    return this.http.get<StatusAsset>(`${roots}status-assets/`)??""
  }
  insert(data : StatusAsset) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${roots}status-assets/`, data)??""
  }
  update(data : StatusAsset): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${roots}status-assets/`, data)??""
  }
  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${roots}status-assets/${id}`)??""
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { StatusAsset } from '../../model/status-asset';
import { baseUrl } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class StatusAssetService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<StatusAsset[]> | undefined {
    return this.http.get<StatusAsset[]>(`${baseUrl}status-assets/`)??""
  }

  insert(data : StatusAsset) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${baseUrl}status-assets/`, data)??""
  }

  update(data : StatusAsset): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${baseUrl}status-assets/`, data)??""
  }

  getByCode(code : string) : Observable<StatusAsset[]> | undefined {
    return this.http.get<StatusAsset[]>(`${baseUrl}status-assets/code/${code}`)??""
  }

  getById(id : string) : Observable<StatusAsset> | undefined {
    return this.http.get<StatusAsset>(`${baseUrl}status-assets/${id}`)??""
  }

  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${baseUrl}status-assets/${id}`)??""
  }
}

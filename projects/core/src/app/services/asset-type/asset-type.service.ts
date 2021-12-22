import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AssetType } from '../../model/asset-type';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { roots } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class AssetTypeService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<AssetType> | undefined {
    return this.http.get<AssetType>(`${roots}asset-types/`)??""
  }
  insert(data : AssetType) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${roots}asset-types/`, data)??""
  }
  update(data : AssetType): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${roots}asset-types/`, data)??""
  }
  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${roots}asset-types/${id}`)??""
  }
}

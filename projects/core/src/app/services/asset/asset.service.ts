import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asset } from '../../model/asset';
import { baseUrl } from '../../constance/root';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Asset[]> | undefined {
    return this.http.get<Asset[]>(`${baseUrl}assets/`)??""
  }

  getAllDeployAsset() : Observable<Asset[]> | undefined {
    return this.http.get<Asset[]>(`${baseUrl}assets/deploy-asset`)??""
  }

  getAllGeneralAsset() : Observable<Asset[]> | undefined {
    return this.http.get<Asset[]>(`${baseUrl}assets/general-asset`)??""
  }

  getByInvent(id : string) : Observable<Asset[]> | undefined {
    return this.http.get<Asset[]>(`${baseUrl}assets/invent/${id}`)??""
  }

  getByBrandId(id : string) : Observable<Asset[]> | undefined {
    return this.http.get<Asset[]>(`${baseUrl}assets/brand/${id}`)??""
  }

  getByCompanyId(id : string) : Observable<Asset[]> | undefined {
    return this.http.get<Asset[]>(`${baseUrl}assets/company/${id}`)??""
  }

  getById(id : string) : Observable<Asset> | undefined {
    return this.http.get<Asset>(`${baseUrl}assets/${id}`)??""
  }

  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${baseUrl}assets/${id}`)??""
  }

  

}

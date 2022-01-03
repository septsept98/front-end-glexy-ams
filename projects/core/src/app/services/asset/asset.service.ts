import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders, HttpEvent  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asset } from '../../model/asset';
import { baseUrl } from '../../constance/root';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { InsertReqDataAssetTransactionDto } from '@dto/transaction/insert-req-data-asset-transaction-dto';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { AssetExpired } from '@dto/report/asset-expired';


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

  getByInventBrand(data : InsertReqDataAssetTransactionDto) : Observable<Asset[]> | undefined {
    return this.http.get<Asset[]>(`${baseUrl}assets/get-invent-brand/?invent-id=${data.inventId}&&brand-id=${data.brandId}`)??""
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

  insert(data : Asset, invoiceImg: File | null, assetImg: File | null ) : Observable<InsertResDto> {
    const formData : FormData = new FormData()
    formData.append('data', JSON.stringify(data))
    if(invoiceImg)
      formData.append('invoiceImg', invoiceImg)
    if(assetImg)
      formData.append('assetImg', assetImg)
    return this.http.post<InsertResDto>(`${baseUrl}assets/`, formData)
  }

  uploadFile(file: File): Observable<InsertResDto> | undefined {
    const formData: FormData = new FormData();

    formData.append('file', file);

    return this.http.post<InsertResDto>(`${baseUrl}assets/upload`, formData)??""
    
  }

  updateImage(data : string, file : File) : Observable<UpdateResDto> | undefined {
    const formData: FormData = new FormData();

    formData.append('data', data)
    formData.append('file', file);

    return this.http.put<UpdateResDto>(`${baseUrl}assets/image`, formData)??""
    
  }
  getExpiredAsset() : Observable<AssetExpired[]> | undefined {
    return this.http.get<AssetExpired[]>(`${baseUrl}assets/expired-asset/`)??""
  }
}

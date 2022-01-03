import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { Observable } from 'rxjs';
import { TrackAsset } from '../../model/track-asset';
import { baseUrl } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class TrackAssetService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<TrackAsset[]> | undefined {
    return this.http.get<TrackAsset[]>(`${baseUrl}track-assets`)??""
  }

  getByAssetTr(assetCode : string, trCode : string) : Observable<TrackAsset[]> | undefined {
    return this.http.get<TrackAsset[]>(`${baseUrl}track-assets/?codeAsset=${assetCode}&transactionCode=${trCode}`)??""
  }

  getAsset(assetCode : string) : Observable<TrackAsset[]> | undefined {
    return this.http.get<TrackAsset[]>(`${baseUrl}track-assets/code/${assetCode}`)??""
  }

  getById(id : string) : Observable<TrackAsset> | undefined {
    return this.http.get<TrackAsset>(`${baseUrl}track-assets/${id}`)??""
  }

  insert(data : TrackAsset) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${baseUrl}track-assets/`, data)??""
  }
  
}

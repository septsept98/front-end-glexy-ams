import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { Observable } from 'rxjs';
import { TrackAsset } from '../../model/track-asset';
import { roots } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class TrackAssetService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<TrackAsset[]> | undefined {
    return this.http.get<TrackAsset[]>(`${roots}track-assets`)??""
  }
  insert(data : TrackAsset) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${roots}track-assets/`, data)??""
  }
  
}

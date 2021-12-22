import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asset } from '../../model/asset';
import { roots } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Asset> | undefined {
    return this.http.get<Asset>(`${roots}assets/`)??""
  }
  

}

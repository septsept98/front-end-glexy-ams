import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { Location } from '../../model/location';
import { roots } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Location> | undefined {
    return this.http.get<Location>(`${roots}locations/`)??""
  }
  insert(data : Location) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${roots}locations/`, data)??""
  }
  update(data : Location): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${roots}locations/`, data)??""
  }
  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${roots}locations/${id}`)??""
  }
}

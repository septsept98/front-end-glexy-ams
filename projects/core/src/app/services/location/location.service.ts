import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { Location } from '../../model/location';
import { baseUrl } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Location[]> | undefined {
    return this.http.get<Location[]>(`${baseUrl}locations/`)??""
  }

  insert(data : Location) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${baseUrl}locations/`, data)??""
  }

  update(data : Location): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${baseUrl}locations/`, data)??""
  }

  getById(id : string) : Observable<Location> | undefined {
    return this.http.get<Location>(`${baseUrl}locations/${id}`)??""
  }

  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${baseUrl}locations/${id}`)??""
  }
}

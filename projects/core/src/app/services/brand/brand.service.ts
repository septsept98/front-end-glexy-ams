import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brand } from '../../model/brand';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { baseUrl } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Brand[]> | undefined {
    return this.http.get<Brand[]>(`${baseUrl}brands/`)??""
  }

  insert(data : Brand) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${baseUrl}brands/`, data)??""
  }

  update(data : Brand): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${baseUrl}brands/`, data)??""
  }

  getById(id : string) : Observable<Brand> | undefined {
    return this.http.get<Brand>(`${baseUrl}brands/${id}`)??""
  }

  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${baseUrl}brands/${id}`)??""
  }
  
  getAllFilter(id: string) : Observable<Brand[]> | undefined {
    return this.http.get<Brand[]>(`${baseUrl}brands/filter/${id}`)??""
  }
}

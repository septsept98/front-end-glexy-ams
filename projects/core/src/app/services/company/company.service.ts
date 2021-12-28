import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { Company } from '../../model/company';
import { baseUrl } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Company[]> | undefined {
    return this.http.get<Company[]>(`${baseUrl}companies/`)??""
  }

  insert(data : Company, file: File | null) : Observable<InsertResDto> | undefined {
    const formData : FormData = new FormData()
    formData.append('data', JSON.stringify(data))
    formData.append('file', file!)
    console.log('asdasdfgbd '+ file)
    return this.http.post<InsertResDto>(`${baseUrl}companies/`, formData)??""
  }

  update(data : Company): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${baseUrl}companies/`, data)??""
  }

  getById(id : string) : Observable<Company> | undefined {
    return this.http.get<Company>(`${baseUrl}companies/${id}`)??""
  }

  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${baseUrl}companies/${id}`)??""
  }
}

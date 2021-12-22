import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { Company } from '../../model/company';
import { roots } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Company> | undefined {
    return this.http.get<Company>(`${roots}companies/`)??""
  }
  insert(data : Company) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${roots}companies/`, data)??""
  }
  update(data : Company): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${roots}companies/`, data)??""
  }
  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${roots}companies/${id}`)??""
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { Employee } from '../../model/employee';
import { baseUrl } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Employee[]> | undefined {
    return this.http.get<Employee[]>(`${baseUrl}employees/`)??""
  }

  insert(data : Employee) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${baseUrl}employees/`, data)??""
  }

  update(data : Employee): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${baseUrl}employees/`, data)??""
  }

  getById(id : string) : Observable<Employee> | undefined {
    return this.http.get<Employee>(`${baseUrl}employees/${id}`)??""
  }

  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${baseUrl}employees/${id}`)??""
  }
}

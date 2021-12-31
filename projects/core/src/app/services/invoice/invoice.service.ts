import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { Invoice } from '../../model/invoice';
import { baseUrl } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Invoice[]> | undefined {
    return this.http.get<Invoice[]>(`${baseUrl}invoices/`)??""
  }

  insert(data : Invoice) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${baseUrl}invoices/`, data)??""
  }

  getById(id : string) : Observable<Invoice> | undefined {
    return this.http.get<Invoice>(`${baseUrl}invoices/${id}`)??""
  }

  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${baseUrl}invoices/${id}`)??""
  }

  update(code : string, file : File) : Observable<UpdateResDto> | undefined {
    const formData: FormData = new FormData();

    formData.append('code', code)
    formData.append('file', file);

    return this.http.put<UpdateResDto>(`${baseUrl}invoices/image`, formData)??""
    
  }
}

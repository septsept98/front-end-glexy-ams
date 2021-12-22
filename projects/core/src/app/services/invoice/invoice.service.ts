import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { Invoice } from '../../model/invoice';
import { roots } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Invoice> | undefined {
    return this.http.get<Invoice>(`${roots}invoices/`)??""
  }
  insert(data : Invoice) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${roots}invoices/`, data)??""
  }
  update(data : Invoice): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${roots}invoices/`, data)??""
  }
  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${roots}invoices/${id}`)??""
  }
}

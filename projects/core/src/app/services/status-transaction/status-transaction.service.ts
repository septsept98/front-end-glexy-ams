import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { Observable } from 'rxjs';
import { StatusTransaction } from '../../model/status-transaction';
import { roots } from '../../constance/root';

@Injectable({
  providedIn: 'root'
})
export class StatusTransactionService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<StatusTransaction> | undefined {
    return this.http.get<StatusTransaction>(`${roots}status-transactions/`)??""
  }
  insert(data : StatusTransaction) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${roots}status-transactions/`, data)??""
  }
  update(data : StatusTransaction): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${roots}status-transactions/`, data)??""
  }
  delete(id : string) : Observable<DeleteResDto> | undefined{
    return this.http.delete<DeleteResDto>(`${roots}status-transactions/${id}`)??""
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { Observable } from 'rxjs';
import { baseUrl } from '../../constance/root';
import { TransactionDetail } from '../../model/transaction-detail';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';

@Injectable({
  providedIn: 'root'
})
export class TransactionDetailService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<TransactionDetail[]> | undefined {
    return this.http.get<TransactionDetail[]>(`${baseUrl}transaction-details/`)??""
  }

  getAllExpDurationAssign() : Observable<TransactionDetail[]> | undefined {
    return this.http.get<TransactionDetail[]>(`${baseUrl}transaction-details/exp-duration`)??""
  }

  getByTr(id : String) : Observable<TransactionDetail[]> | undefined {
    return this.http.get<TransactionDetail[]>(`${baseUrl}transaction-details/details/${id}`)??""
  }

  insert(data : TransactionDetail) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${baseUrl}transaction-details/`, data)??""
  }

  update(data : TransactionDetail): Observable<UpdateResDto> | undefined {
    return this.http.put<UpdateResDto>(`${baseUrl}transaction-details/`, data)??""
  }

  getById(id : string) : Observable<TransactionDetail> | undefined {
    return this.http.get<TransactionDetail>(`${baseUrl}transaction-details/${id}`)??""
  }

}

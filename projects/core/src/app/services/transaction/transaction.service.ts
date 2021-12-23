import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { Observable } from 'rxjs';
import { baseUrl } from '../../constance/root';
import { Transactions } from '../../model/transactions';
import { InsertReqDataAssetTransactionDto } from '../../dto/transaction/insert-req-data-asset-transaction-dto';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Transactions[]> | undefined {
    return this.http.get<Transactions[]>(`${baseUrl}transactions/`)??""
  }

  getById(id : string) : Observable<Transactions> | undefined {
    return this.http.get<Transactions>(`${baseUrl}transactions/${id}`)??""
  }

  insert(data : Transactions) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${baseUrl}transactions/`, data)??""
  }
}

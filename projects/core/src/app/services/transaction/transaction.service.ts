import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { Observable } from 'rxjs';
import { baseUrl } from '../../constance/root';
import { Transactions } from '../../model/transactions';
import { InsertReqDataAssetTransactionDto } from '../../dto/transaction/insert-req-data-asset-transaction-dto';
import { Asset } from '@models/asset';
import { InsertReqTransactionDto } from '@dto/transaction/insert-req-transaction-dto';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Transactions[]> | undefined {
    return this.http.get<Transactions[]>(`${baseUrl}transactions/`)??""
  }

  getAllNotCheckIn() : Observable<Transactions[]> | undefined {
    return this.http.get<Transactions[]>(`${baseUrl}transactions/not-check-in`)??""
  }

  getAllCheckIn() : Observable<Transactions[]> | undefined {
    return this.http.get<Transactions[]>(`${baseUrl}transactions/check-in`)??""
  }

  getById(id : string) : Observable<Transactions> | undefined {
    return this.http.get<Transactions>(`${baseUrl}transactions/${id}`)??""
  }

  getAsset(data : InsertReqDataAssetTransactionDto) : Observable<Asset[]> | undefined {
    return this.http.post<Asset[]>(`${baseUrl}transactions/asset-details`, data)??""
  }

  insert(data : InsertReqTransactionDto) : Observable<InsertResDto> | undefined {
    return this.http.post<InsertResDto>(`${baseUrl}transactions/`, data)??""
  }
}

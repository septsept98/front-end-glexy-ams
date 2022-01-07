import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertResDto } from '../../dto/all-respons/insert-res-dto';
import { Observable } from 'rxjs';
import { baseUrl } from '../../constance/root';
import { TransactionDetail } from '../../model/transaction-detail';
import { DeleteResDto } from '../../dto/all-respons/delete-res-dto';
import { UpdateResDto } from '../../dto/all-respons/update-res-dto';
import { TrxOutofDate } from '@dto/report/trx-out-of-date';
import { ResDto } from '@dto/all-respons/res-dto';

@Injectable({
  providedIn: 'root'
})
export class TransactionDetailService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<TransactionDetail[]> | undefined {
    return this.http.get<TransactionDetail[]>(`${baseUrl}transaction-details/`)??""
  }

  getAllCheckIn() : Observable<TransactionDetail[]> | undefined {
    return this.http.get<TransactionDetail[]>(`${baseUrl}transaction-details/all-check-in`)??""
  }

  getAllNotCheckIn() : Observable<TransactionDetail[]> | undefined {
    return this.http.get<TransactionDetail[]>(`${baseUrl}transaction-details/all-not-check-in`)??""
  }

  getAllExpDurationAssign() : Observable<TransactionDetail[]> | undefined {
    return this.http.get<TransactionDetail[]>(`${baseUrl}transaction-details/exp-duration`)??""
  }

  getByTr(id : String) : Observable<TransactionDetail[]> | undefined {
    return this.http.get<TransactionDetail[]>(`${baseUrl}transaction-details/details/${id}`)??""
  }

  getByTrNotCheckIn(id : String) : Observable<TransactionDetail[]> | undefined {
    return this.http.get<TransactionDetail[]>(`${baseUrl}transaction-details/details-not-checkin/${id}`)??""
  }

  getByTrCheckIn(id : String) : Observable<TransactionDetail[]> | undefined {
    return this.http.get<TransactionDetail[]>(`${baseUrl}transaction-details/details-checkin/${id}`)??""
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

  getOutDate() : Observable<TrxOutofDate[]> | undefined {
    return this.http.get<TrxOutofDate[]>(`${baseUrl}transaction-details/out-date`)??""
  }

  sendEmail() : Observable<ResDto> | undefined {
    return this.http.get<ResDto>(`${baseUrl}transaction-details/send-email`)??""
  }

  downloadPdf() : Observable<ResDto> | undefined {
    return this.http.get<ResDto>(`${baseUrl}transaction-details/pdf`)??""
  }
}

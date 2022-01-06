import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResDto } from '@dto/all-respons/res-dto';
import { TrxOutofDate } from '@dto/report/trx-out-of-date';
import { TransactionDetailService } from '@services/transaction-detail/transaction-detail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history-trx-expired',
  templateUrl: './history-trx-expired.component.html',
  styleUrls: ['./history-trx-expired.component.css']
})
export class HistoryTrxExpiredComponent implements OnInit, OnDestroy {

  listDataTrxExpired: TrxOutofDate[] = []

  private unSubs?: Subscription

  private resDto!: ResDto

  constructor(private router: Router,
    private transactionDetailService: TransactionDetailService) { }

  ngOnInit(): void {
    this.transactionDetailService.getOutDate()?.subscribe(res => {
      this.listDataTrxExpired = res
    })
  }

  isDisplayAvail(file: File): boolean {
    if (file) {
      return true
    } else {
      return false
    }
  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }
  
  downloadPdf(): void {
    this.transactionDetailService.downloadPdf()?.subscribe(res => {
      this.resDto.msg = "Downloaded"
    })
  }

  sendEmail(): void {
    this.transactionDetailService.sendEmail()?.subscribe(res => {
      this.resDto = res
    })
  }
}

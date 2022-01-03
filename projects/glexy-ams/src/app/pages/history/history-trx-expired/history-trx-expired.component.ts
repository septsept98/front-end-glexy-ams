import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router,
    private transactionDetailService: TransactionDetailService) { }

  ngOnInit(): void {
    this.transactionDetailService.getOutDate()?.subscribe(res => {
      this.listDataTrxExpired = res
    })
  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionDetail } from '@models/transaction-detail';
import { TransactionDetailService } from '@services/transaction-detail/transaction-detail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.css']
})
export class HistoryDetailComponent implements OnInit, OnDestroy {

  listTrxDetail: TransactionDetail[] = []
  codeTrx!: string

  private unSubs?: Subscription

  constructor(private router: Router,
    private route: ActivatedRoute,
    private transactionDetailService: TransactionDetailService) { }

  ngOnInit(): void {
    const idTrx: any = this.route.snapshot.paramMap.get('id');
    this.transactionDetailService.getByTr(idTrx)?.subscribe(res => {
      this.listTrxDetail = res
      this.codeTrx = this.listTrxDetail[0].transactionId.codeTransaction
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

  detailInfo(id: any): void {
    this.router.navigateByUrl(`/glexy/histories/transaction-detail-info/${id}`)
  }
}
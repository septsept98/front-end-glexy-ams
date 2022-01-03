import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionDetail } from '@models/transaction-detail';
import { TransactionDetailService } from '@services/transaction-detail/transaction-detail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transaction-check-in-detail-list',
  templateUrl: './transaction-check-in-detail-list.component.html',
  styleUrls: ['./transaction-check-in-detail-list.component.css']
})
export class TransactionCheckInDetailListComponent implements OnInit, OnDestroy {

  listTrxDetail: TransactionDetail[] = []

  private unSubs?: Subscription

  constructor(private router: Router,
    private route: ActivatedRoute,
    private transactionDetailService: TransactionDetailService) { }

  ngOnInit(): void {
    const idTrx: any = this.route.snapshot.paramMap.get('id');
    this.transactionDetailService.getByTr(idTrx)?.subscribe(res => {
      this.listTrxDetail = res
    })
  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

  checkIn(id: any): void {
    this.router.navigateByUrl(`/glexy/transaction/check-in-asset/${id}`)
  }
}
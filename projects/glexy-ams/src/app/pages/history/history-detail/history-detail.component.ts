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
  nameStatus!: string
  title!: string

  private unSubs?: Subscription

  constructor(private router: Router,
    private route: ActivatedRoute,
    private transactionDetailService: TransactionDetailService) { }

  ngOnInit(): void {
    const idTrx: any = this.route.snapshot.paramMap.get('id');
    const type: any = this.route.snapshot.paramMap.get('type');
    this.initData(idTrx, type)
  }

  initData(idTrx: any, type: any): void {
    if(type == 'IN'){
      this.title = "Check In"
      this.transactionDetailService.getByTrCheckIn(idTrx)?.subscribe(res => {
        this.listTrxDetail = res
        this.codeTrx = this.listTrxDetail[0].transactionId.codeTransaction
      })
    }else if(type == 'OUT'){
      this.title = "Check Out"
      this.transactionDetailService.getByTrNotCheckIn(idTrx)?.subscribe(res => {
        this.listTrxDetail = res
        this.codeTrx = this.listTrxDetail[0].transactionId.codeTransaction
      })
    }else{
      this.title = "All"
      this.transactionDetailService.getByTr(idTrx)?.subscribe(res => {
        this.listTrxDetail = res
        this.codeTrx = this.listTrxDetail[0].transactionId.codeTransaction
      })
    }
  }

  statusTrx(data: any): string {
    let badge: string = ""
    if(data == null){
      badge = "badge-danger"
      this.nameStatus = "Assign"
    }else {
      badge = "badge-primary"
      this.nameStatus = "Complete"
    }
    return badge
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
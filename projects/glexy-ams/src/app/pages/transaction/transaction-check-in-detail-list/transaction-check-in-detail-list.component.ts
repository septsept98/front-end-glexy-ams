import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
  
  codeTrx!: string
  nameStatus!: string

  private unSubs?: Subscription

  constructor(private router: Router,
    private route: ActivatedRoute,
    private transactionDetailService: TransactionDetailService,
    private title :Title) {
      title.setTitle("Check In Detail")
     }

  ngOnInit(): void {
    const idTrx: any = this.route.snapshot.paramMap.get('id');
    this.transactionDetailService.getByTrNotCheckIn(idTrx)?.subscribe(res => {
      this.listTrxDetail = res
      this.codeTrx = this.listTrxDetail[0].transactionId.codeTransaction
    })
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

  isDisplayAvail(file: File) : boolean {
    if(file) {
      return true
    } else {
      return false
    }
  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

  checkIn(id: any): void {
    this.router.navigateByUrl(`/glexy/transaction/check-in-asset/${id}`)
  }
}
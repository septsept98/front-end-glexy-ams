import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StatusTransaction } from '@models/status-transaction';
import { TransactionDetail } from '@models/transaction-detail';
import { StatusTransactionService } from '@services/status-transaction/status-transaction.service';
import { TransactionDetailService } from '@services/transaction-detail/transaction-detail.service';

@Component({
  selector: 'app-transaction-check-in',
  templateUrl: './transaction-check-in.component.html',
  styleUrls: ['./transaction-check-in.component.css']
})
export class TransactionCheckInComponent implements OnInit {

  dataAssetTrxDetail: TransactionDetail = new TransactionDetail()

  listStatusTrx: StatusTransaction[] = []

  statusTrxSelected!: string

  constructor(private route: ActivatedRoute,
    private transactionDetailService: TransactionDetailService,
    private statusTrxService: StatusTransactionService) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id')
    this.transactionDetailService.getById(id)?.subscribe(res => {
      this.dataAssetTrxDetail = res
    })

    this.statusTrxService.getAll()?.subscribe(res => {
      this.listStatusTrx = res
    })
  }

  onSubmit(): void {
    // let statusTransaction: StatusTransaction = new StatusTransaction()
    // statusTransaction.id = this.statusTrxSelected
    // this.dataAssetTrxDetail.statusTrCheckinId = statusTransaction
    console.log(this.dataAssetTrxDetail)
  }

}

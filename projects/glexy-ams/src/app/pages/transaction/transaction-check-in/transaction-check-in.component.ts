import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
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

  resUpdate!: UpdateResDto

  constructor(private route: ActivatedRoute,
    private router: Router,
    private transactionDetailService: TransactionDetailService,
    private statusTrxService: StatusTransactionService) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id')
    this.transactionDetailService.getById(id)?.subscribe(res => {
      this.dataAssetTrxDetail = res
      this.statusTrxSelected = this.dataAssetTrxDetail.statusTrCheckinId?this.dataAssetTrxDetail.statusTrCheckinId.id:" - "
    })
    this.statusTrxService.getAll()?.subscribe(res => {
      this.listStatusTrx = res
    })
  }

  onSubmit(): void {
    console.log(this.statusTrxSelected)
    let statusTrx: StatusTransaction = new StatusTransaction()
    statusTrx.id = this.statusTrxSelected
    this.dataAssetTrxDetail.statusTrCheckinId = statusTrx
    console.log(this.dataAssetTrxDetail)
    this.transactionDetailService.update(this.dataAssetTrxDetail)?.subscribe(res => {
      this.resUpdate = res
      this.router.navigateByUrl("/glexy/transaction/check-in-list")
    })
  }

  onCancel(idTrx: any): void {
    this.router.navigateByUrl(`/glexy/transaction/check-in-detail-list/${idTrx}`)
  }

}

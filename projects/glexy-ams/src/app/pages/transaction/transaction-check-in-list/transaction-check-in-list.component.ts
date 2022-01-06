import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trxAssignType } from '@constant/trx-type';
import { GetAllTrx } from '@dto/transaction/get-all-trx';
import { Transactions } from '@models/transactions';
import { TransactionService } from '@services/transaction/transaction.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-transaction-check-in-list',
  templateUrl: './transaction-check-in-list.component.html',
  styleUrls: ['./transaction-check-in-list.component.css']
})
export class TransactionCheckInListComponent implements OnInit, OnDestroy {

  listDataTransaction: Transactions[] = []
  listDataTrxDto: GetAllTrx[] = []

  private unSubs?: Subscription;
  constructor(private router: Router,
    private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.transactionService.getAllNotCheckIn()?.subscribe(res => {
      this.listDataTransaction = res
      console.log(res)
      for (let i = 0; i < this.listDataTransaction.length; i++) {
        let dataTrxDto: GetAllTrx = new GetAllTrx()
        dataTrxDto.id = this.listDataTransaction[i].id
        dataTrxDto.code = this.listDataTransaction[i].codeTransaction
        if (this.listDataTransaction[i].locationId != null) {
          dataTrxDto.assignType = String(trxAssignType.get(2)?.[1])
          dataTrxDto.assignTo = this.listDataTransaction[i].locationId.namePlace
        } else if (this.listDataTransaction[i].assetGeneralId != null) {
          dataTrxDto.assignType = String(trxAssignType.get(3)?.[1])
          dataTrxDto.assignTo = this.listDataTransaction[i].assetGeneralId.code + " - " + this.listDataTransaction[i].assetGeneralId.names
        } else if (this.listDataTransaction[i].employeeId != null) {
          dataTrxDto.assignType = String(trxAssignType.get(1)?.[1])
          dataTrxDto.assignTo = this.listDataTransaction[i].employeeId.nameEmployee
        } else {
          dataTrxDto.assignType = " - "
          dataTrxDto.assignTo = " - "
        }
        dataTrxDto.checkOutDate = this.listDataTransaction[i].checkOutDate
        this.listDataTrxDto.push(dataTrxDto)
      }
    })
  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

  checkIn(id: any): void {
    this.router.navigateByUrl(`/glexy/transaction/check-in-detail-list/${id}`)
  }
}

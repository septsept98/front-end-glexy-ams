import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trxAssignType } from '@constant/trx-type';
import { GetAllTrx } from '@dto/transaction/get-all-trx';
import { Transactions } from '@models/transactions';
import { TransactionService } from '@services/transaction/transaction.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit, OnDestroy {

  listDataTransaction: Transactions[] = []
  listDataTrxDto: GetAllTrx[] = []

  listTypeHistory: TypeHistory[] = []

  allHist: boolean = true
  outHist: boolean = false
  inHist: boolean = false

  private unSubs?: Subscription;
  constructor(private router: Router,
    private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.initData()
  }

  initData(): void {
    this.listTypeHistory = [
      {code:'ALL',name:'All'},
      {code:'OUT',name:'Check Out'},
      {code:'IN',name:'Check In'}
    ]
    this.initDataAll()
  }

  initDataAll(): void {
    this.transactionService.getAll()?.subscribe(res => {
      this.listDataTransaction = res
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

  initDataOut(): void {
    this.transactionService.getAllNotCheckIn()?.subscribe(res => {
      this.listDataTransaction = res
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
  
  initDataIn(): void {
    this.transactionService.getAllCheckIn()?.subscribe(res => {
      this.listDataTransaction = res
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

  detailTrx(id: any, type: any): void {
    this.router.navigateByUrl(`/glexy/histories/transaction-detail/${type}/${id}`)
  }

  downloadPdf(): void {
    // this.transactionService.downloadPdf()?.subscribe(res => {
    //   this.resDto.msg = "Downloaded"
    // })
  }

  sendEmail(): void {
    // this.transactionService.sendEmail()?.subscribe(res => {
    //   this.resDto = res
    // })
  }

  typeChange(data: any){
    if(data.value == 'IN'){
      this.listDataTransaction = []
      this.listDataTrxDto = []
      this.initDataIn()
      this.allHist = false
      this.outHist = false
      this.inHist = true
    } else if(data.value == 'OUT'){
      this.listDataTransaction = []
      this.listDataTrxDto = []
      this.initDataOut()
      this.allHist = false
      this.outHist = true
      this.inHist = false
    } else {
      this.listDataTransaction = []
      this.listDataTrxDto = []
      this.initDataAll()
      this.allHist = true
      this.outHist = false
      this.inHist = false
    }
  }
}
class TypeHistory {
  code!: string
  name!: string
}


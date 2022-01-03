import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionDetail } from '@models/transaction-detail';
import { TransactionDetailService } from '@services/transaction-detail/transaction-detail.service';

@Component({
  selector: 'app-history-detail-info',
  templateUrl: './history-detail-info.component.html',
  styleUrls: ['./history-detail-info.component.css']
})
export class HistoryDetailInfoComponent implements OnInit {

  dataAssetTrxDetail: TransactionDetail = new TransactionDetail()

  constructor(private route: ActivatedRoute,
    private transactionDetailService: TransactionDetailService) { }

  ngOnInit(): void {
    const id: any = this.route.snapshot.paramMap.get('id')
    this.transactionDetailService.getById(id)?.subscribe(res => {
      this.dataAssetTrxDetail = res
    })
  }

}

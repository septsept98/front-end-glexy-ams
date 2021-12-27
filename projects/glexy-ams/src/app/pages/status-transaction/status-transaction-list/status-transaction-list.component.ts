import { Component, OnDestroy, OnInit } from '@angular/core';
import { StatusTransactionService } from '@services/status-transaction/status-transaction.service';
import { StatusTransaction } from '@models/status-transaction';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-status-transaction-list',
  templateUrl: './status-transaction-list.component.html',
  styleUrls: ['./status-transaction-list.component.css']
})
export class StatusTransactionListComponent implements OnInit, OnDestroy {

  // listStatusAssets: StatusAsset[] = []
  listStatusAssets: Asset[] = []
  selectedStatusAssets: StatusTransaction[] = []

  private unSubs?: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.listStatusAssets = [
      {codeStatusTr: 'ccc', nameStatusTr:'s', nameStatusAsset:'asas'},
      {codeStatusTr: 'aaa', nameStatusTr:'df', nameStatusAsset:'ff'},
      {codeStatusTr: 'xxx', nameStatusTr:'ssd', nameStatusAsset:'re'},
      {codeStatusTr: 'ccc', nameStatusTr:'fass', nameStatusAsset:'fg'},
      {codeStatusTr: 'vvv', nameStatusTr:'wee', nameStatusAsset:'f'},
      {codeStatusTr: 'ff', nameStatusTr:'wwe', nameStatusAsset:'b'},
      {codeStatusTr: 'dsf', nameStatusTr:'wwe', nameStatusAsset:'bbf'},
      {codeStatusTr: 'sss', nameStatusTr:'wwe', nameStatusAsset:'iuiu'},
      {codeStatusTr: 'uuy', nameStatusTr:'wwe', nameStatusAsset:'hh'},
      {codeStatusTr: 'uyj', nameStatusTr:'kmm', nameStatusAsset:'mm'},
      {codeStatusTr: 'kkk', nameStatusTr:'oiu', nameStatusAsset:'njk'},
      {codeStatusTr: 'aba', nameStatusTr:'dds', nameStatusAsset:'hg'},
      {codeStatusTr: 'acv', nameStatusTr:'ggdg', nameStatusAsset:'nmn'}
    ]
  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }
}
class Asset {
  codeStatusTr!: string
  nameStatusTr!: string
  nameStatusAsset!: string
} 

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history-track-asset',
  templateUrl: './history-track-asset.component.html',
  styleUrls: ['./history-track-asset.component.css']
})
export class HistoryTrackAssetComponent implements OnInit, OnDestroy {

 // listStatusAssets: StatusAsset[] = []
 listStatusAssets: Asset[] = []
 selectedStatusAssets!: Asset

 private unSubs?: Subscription;
  constructor(private router: Router) { }

  ngOnInit(): void {
  
    this.listStatusAssets = [
      {codeStatusAsset: 'ccc', nameStatusAsset:'s'},
      {codeStatusAsset: 'aaa', nameStatusAsset:'df'},
      {codeStatusAsset: 'xxx', nameStatusAsset:'ssd'},
      {codeStatusAsset: 'ccc', nameStatusAsset:'fass'},
      {codeStatusAsset: 'vvv', nameStatusAsset:'wee'},
      {codeStatusAsset: 'ff', nameStatusAsset:'wwe'},
      {codeStatusAsset: 'dsf', nameStatusAsset:'wwe'},
      {codeStatusAsset: 'sss', nameStatusAsset:'wwe'},
      {codeStatusAsset: 'uuy', nameStatusAsset:'wwe'},
      {codeStatusAsset: 'uyj', nameStatusAsset:'kmm'},
      {codeStatusAsset: 'kkk', nameStatusAsset:'oiu'},
      {codeStatusAsset: 'aba', nameStatusAsset:'dds'},
      {codeStatusAsset: 'acv', nameStatusAsset:'ggdg'}
    ]
  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

  detailTrx(): void {
    this.router.navigateByUrl("/glexy/histories/transaction-detail")
  }
}
class Asset {
  codeStatusAsset!: string
  nameStatusAsset!: string
} 


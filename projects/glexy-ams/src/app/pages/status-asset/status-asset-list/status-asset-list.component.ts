import { Component, OnDestroy, OnInit } from '@angular/core';
import { StatusAssetService } from '@services/status-asset/status-asset.service';
import { StatusAsset } from '@models/status-asset'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-status-asset-list',
  templateUrl: './status-asset-list.component.html',
  styleUrls: ['./status-asset-list.component.css']
})
export class StatusAssetListComponent implements OnInit, OnDestroy {

  // listStatusAssets: StatusAsset[] = []
  listStatusAssets: Asset[] = []
  selectedStatusAssets: StatusAsset[] = []

  private unSubs?: Subscription;

  constructor(private statusAssetService: StatusAssetService) { }

  ngOnInit(): void {
    //  this.unSubs = this.statusAssetService.getAll()?.subscribe(data => {
    //    this.listStatusAssets = data
    //    console.log(this.listStatusAssets)
    //  })
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
}
class Asset {
  codeStatusAsset!: string
  nameStatusAsset!: string
} 

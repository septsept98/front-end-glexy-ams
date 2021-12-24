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

  listStatusAssets: StatusAsset[] = []
  selectedStatusAssets: StatusAsset[] = []

  private unSubs?: Subscription;

  constructor(private statusAssetService: StatusAssetService) { }

  ngOnInit(): void {
     this.unSubs = this.statusAssetService.getAll()?.subscribe(data => {
       this.listStatusAssets = data
       console.log(this.listStatusAssets)
     })
  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }
  
}

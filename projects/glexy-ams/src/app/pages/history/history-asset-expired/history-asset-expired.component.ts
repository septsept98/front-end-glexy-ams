import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetExpired } from '@dto/report/asset-expired';
import { AssetService } from '@services/asset/asset.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-history-asset-expired',
  templateUrl: './history-asset-expired.component.html',
  styleUrls: ['./history-asset-expired.component.css']
})
export class HistoryAssetExpiredComponent implements OnInit, OnDestroy {

  listDataExpiredAsset: AssetExpired[] = []

  private unSubs?: Subscription

  constructor(private router: Router,
    private assetService: AssetService) { }

  ngOnInit(): void {
    this.assetService.getExpiredAsset()?.subscribe(res => {
      this.listDataExpiredAsset = res
    })
  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }
}
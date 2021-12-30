import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asset } from '@models/asset';
import { AssetService } from '@services/asset/asset.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit, OnDestroy {

  constructor(private assetService : AssetService, private router : Router) { }

  assetList: Asset[] = []
  selectedAsset: Asset[] = []
  obs? : Subscription

  ngOnInit(): void {

    this.assetService.getAll()?.subscribe(result => this.assetList = result)

  }
  isDisplayAvail(file: File) : boolean {
    if(file) {
      return true
    } else {
      return false
    }
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe
  }

  onUpdate(id : number): void{
    this.router.navigateByUrl(`/glexy/asset/${id}`)
  }

}


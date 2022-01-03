import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssetType } from 'projects/core/src/app/model/asset-type';
import { AssetTypeService } from 'projects/core/src/app/services/asset-type/asset-type.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-asset-type-list',
  templateUrl: './asset-type-list.component.html',
  styleUrls: ['./asset-type-list.component.css']
})
export class AssetTypeListComponent implements OnInit, OnDestroy {

  constructor(private assetTypeService : AssetTypeService, private router : Router) { }
  dataList : AssetType[] = []
  selectedData : AssetType[] = []
  obs? : Subscription

  ngOnInit(): void {
    this.assetTypeService.getAll()?.subscribe(result => this.dataList = result)
  }

  ngOnDestroy(): void{
    this.obs?.unsubscribe()
  }

  onUpdate(id : number): void{
    this.router.navigateByUrl(`/glexy/asset-type/${id}`)
  }

}

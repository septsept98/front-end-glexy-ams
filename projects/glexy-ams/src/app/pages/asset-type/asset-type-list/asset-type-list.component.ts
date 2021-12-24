import { Component, OnInit } from '@angular/core';
import { AssetType } from 'projects/core/src/app/model/asset-type';
import { AssetTypeService } from 'projects/core/src/app/services/asset-type/asset-type.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-asset-type-list',
  templateUrl: './asset-type-list.component.html',
  styleUrls: ['./asset-type-list.component.css']
})
export class AssetTypeListComponent implements OnInit {

  constructor(private assetTypeService : AssetTypeService) { }
  dataList? : AssetType[] = []
  obs? : Subscription

  ngOnInit(): void {
    this.assetTypeService.getAll()?.subscribe(result => this.dataList = result)
  }

}

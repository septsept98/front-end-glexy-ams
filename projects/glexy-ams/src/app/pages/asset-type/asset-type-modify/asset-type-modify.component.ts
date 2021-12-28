import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { AssetType } from '@models/asset-type';
import { AssetTypeService } from '@services/asset-type/asset-type.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-asset-type-modify',
  templateUrl: './asset-type-modify.component.html',
  styleUrls: ['./asset-type-modify.component.css']
})
export class AssetTypeModifyComponent implements OnInit, OnDestroy {

  constructor(private assetTypeService : AssetTypeService, private router: Router) { }
  assetTypeInsert! : AssetType
  dataAssetType? : InsertResDto
  obs? : Subscription

  ngOnInit(): void {
    this.dataAssetType = new InsertResDto();
    this.assetTypeInsert = new AssetType();
  }

  addDb(): void {
    this.assetTypeService.insert(this.assetTypeInsert)?.subscribe(result => {
      if(result.data) {
        this.dataAssetType = result
        if(this.dataAssetType){
          this.router.navigateByUrl("/glexy/asset-type/list")

        }
      }
    })
  }

  ngOnDestroy(): void{
    this.obs?.unsubscribe()
  }


}

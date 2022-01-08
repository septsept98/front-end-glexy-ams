import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { AssetType } from '@models/asset-type';
import { AssetTypeService } from '@services/asset-type/asset-type.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-asset-type-modify',
  templateUrl: './asset-type-modify.component.html',
  styleUrls: ['./asset-type-modify.component.css']
})
export class AssetTypeModifyComponent implements OnInit, OnDestroy {

  constructor(private assetTypeService : AssetTypeService, private router: Router,
     private activedRoute:ActivatedRoute, private title :Title) { 
      title.setTitle("Asset Type Create")
     }
  assetTypeInsert : AssetType = new AssetType()
  dataAssetType : InsertResDto = new InsertResDto()
  updateResDto: UpdateResDto = new UpdateResDto()
  save: boolean = true
  tab: boolean = false
  assetTypeId? : string | null
  dataSubs?: Subscription
  insertSubs?: Subscription
  updateSubs?: Subscription

  ngOnInit(): void {
    this.assetTypeId = this.activedRoute.snapshot.paramMap.get('id')

    if(this.assetTypeId){
      this.title.setTitle("Asset Type Update")
      this.dataSubs = this.assetTypeService.getById(this.assetTypeId)?.subscribe(result => {
        this.save = false
        this.tab = true
        this.assetTypeInsert = result
      })
    }
    
  }

  addDb(): void {
    if(this.assetTypeId) {
      this.updateSubs = this.assetTypeService.update(this.assetTypeInsert)?.subscribe( result => {
        this.updateResDto = result
        this.router.navigateByUrl('/glexy/asset-type')
      })
    } else {
      this.assetTypeService.insert(this.assetTypeInsert)?.subscribe(result => {
        if(result.data) {
          this.dataAssetType = result
          if(this.dataAssetType){
            this.router.navigateByUrl("/glexy/asset-type")
  
          }
        }
      })
    }
    
  }

  ngOnDestroy(): void{
    this.dataSubs?.unsubscribe()
    this.insertSubs?.unsubscribe()
    this.updateSubs?.unsubscribe()
  }

  onCancel() :void{
    this.router.navigateByUrl('/glexy/asset-type')

  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { Asset } from '@models/asset';
import { AssetType } from '@models/asset-type';
import { Brand } from '@models/brand';
import { Company } from '@models/company';
import { StatusAsset } from '@models/status-asset';
import { AssetTypeService } from '@services/asset-type/asset-type.service';
import { AssetService } from '@services/asset/asset.service';
import { BrandService } from '@services/brand/brand.service';
import { CompanyService } from '@services/company/company.service';
import { StatusAssetService } from '@services/status-asset/status-asset.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-asset-update',
  templateUrl: './asset-update.component.html',
  styleUrls: ['./asset-update.component.css']
})
export class AssetUpdateComponent implements OnInit, OnDestroy {

  constructor(private activeRoute : ActivatedRoute, private assetService : AssetService, private assetTypeService : AssetTypeService,
    private companyService : CompanyService, private statusAssetSerive : StatusAssetService, private brandService : BrandService, private router : Router) { }

  asset : Asset = new Asset()
  assetType : AssetType[] = []
  company : Company[] = []
  statusAsset : StatusAsset[] = []
  brand : Brand[] = []
  selectedImg! : FileList
  dataUpdate: UpdateResDto = new UpdateResDto()
  obs? : Subscription
  fileImg! : File | null

  ngOnInit(): void {
    const data = this.activeRoute.snapshot.paramMap.get('id')
    if(data){
      this.assetService.getById(data)?.subscribe(result => this.asset = result)
      this.assetTypeService.getAll()?.subscribe(result => this.assetType = result)
      this.companyService.getAll()?.subscribe(result => this.company = result)
      this.brandService.getAll()?.subscribe(result => this.brand = result)
    }
  }

  selectFile(event : any) {
    this.selectedImg = event.target.files;
  }

  onUpdateImg(): void {
    this.fileImg = this.selectedImg?.item(0)
      this.assetService.updateImage(this.fileImg!)?.subscribe(result => {
        this.dataUpdate = result
        if(this.dataUpdate){
          this.router.navigateByUrl("/glexy/asset/list")
        }
      }) 
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

}

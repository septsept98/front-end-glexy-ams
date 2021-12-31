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
import { Select2OptionData } from 'ng-select2';
import { Subscription } from 'rxjs';
import { Options } from 'select2';

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
  optionsBrand! : Options;
  optionsCompany! : Options;
  optionsAssetType! : Options;
  optionsStatusAsset! : Options;


  ngOnInit(): void {
    const data = this.activeRoute.snapshot.paramMap.get('id')
    if(data){
      this.assetService.getById(data)?.subscribe(result => this.asset = result)
    }
    this.assetTypeService.getAll()?.subscribe(result => this.assetType = result)
    this.companyService.getAll()?.subscribe(result => this.company = result)
    this.brandService.getAll()?.subscribe(result => this.brand = result)

    this.optionsBrand = {
      width:'100%',
      ajax: {
        
        url: 'http://localhost:1234/brands/search/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result:Brand[] = data;
          const select2Data : Select2OptionData[] = []
          for (const brand of result) {
            select2Data.push(
              {
                id: brand.id,
                text: brand.names
              }
            )
          }
          return {
            results: select2Data
          };
        }
    
      }
    }

    this.optionsAssetType = {
      width:'100%',
      ajax: {
        
        url: 'http://localhost:1234/asset-types/search/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result:AssetType[] = data;
          const select2Data : Select2OptionData[] = []
          for (const assetType of result) {
            select2Data.push(
              {
                id: assetType.id,
                text: assetType.names
              }
            )
          }
          return {
            results: select2Data
          };
        }
    
      }
    }

    this.optionsStatusAsset = {
      width:'100%',
      ajax: {
        url: 'http://localhost:1234/status-assets/search',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result:StatusAsset[] = data;
          const select2Data : Select2OptionData[] = []
          for (const statAsset of result) {
            select2Data.push(
              {
                id: statAsset.id!,
                text: statAsset.nameStatusAsset!
              }
            )
          }
          return {
            results: select2Data
          };
        }
        
      }
    }
  }

  selectFile(event : any) {
    this.selectedImg = event.target.files;
  }

  onUpdateImg(): void {
    this.fileImg = this.selectedImg?.item(0)
      this.assetService.updateImage(this.asset.code, this.fileImg!)?.subscribe(result => {
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

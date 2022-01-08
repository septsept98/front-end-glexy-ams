import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { Asset } from '@models/asset';
import { AssetType } from '@models/asset-type';
import { Brand } from '@models/brand';
import { Company } from '@models/company';
import { Inventory } from '@models/inventory';
import { Invoice } from '@models/invoice';
import { StatusAsset } from '@models/status-asset';
import { AssetService } from '@services/asset/asset.service';
import { AuthService } from '@services/auth/auth.service';
import { Select2OptionData } from 'ng-select2';
import { Subscription } from 'rxjs';
import { Options } from 'select2';

@Component({
  selector: 'app-asset-modify',
  templateUrl: './asset-modify.component.html',
  styleUrls: ['./asset-modify.component.css']
})
export class AssetModifyComponent implements OnInit, OnDestroy {

  constructor(private assetService : AssetService, private router : Router, 
    private authService : AuthService, private title :Title) { 
      title.setTitle("Asset Create")
    }

  optionsBrand! : Options;
  optionsCompany! : Options;
  optionsAssetType! : Options;
  optionsStatusAsset! : Options;
  assetInsert : Asset = new Asset();
  insertResDto: InsertResDto = new InsertResDto();
  obs? : Subscription;
  insertSubs? : Subscription;
  selectedImgAsset!: FileList;
  selectedImgInvo!: FileList;
  selectedExcel!: FileList;
  currentFile?: File | null;
  fileAsset? : File | null;
  fileInvoice? : File | null;
  progress = 0;
  message = '';

  ngOnInit(): void {
    this.assetInsert.companyId = new Company()
    this.assetInsert.inventoryId = new Inventory()
    this.assetInsert.assetTypeId = new AssetType()
    this.assetInsert.invoiceId = new Invoice()
    this.assetInsert.brandId = new Brand()
    this.assetInsert.statusAssetId = new StatusAsset()

    this.optionsCompany = {
      
      width:'100%',
      ajax: {
        headers: {Authorization: `Bearer ${this.authService.getToken()}`},
        url: 'http://localhost:1234/companies/search/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result:Company[] = data;
          const select2Data : Select2OptionData[] = []
          for (const company of result) {
            select2Data.push(
              {
                id: company.id!,
                text: company.names!
                
              }
            )
          }
          return {
            results: select2Data
          };
        }
        
      }
    }
    
    this.optionsBrand = {
      width:'100%',
      ajax: {
        headers: {Authorization: `Bearer ${this.authService.getToken()}`},
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
        headers: {Authorization: `Bearer ${this.authService.getToken()}`},
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
        headers: {Authorization: `Bearer ${this.authService.getToken()}`},
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
    this.selectedExcel = event.target.files;
  }
  selectImgInvo(event : any) {
    this.selectedImgInvo = event.target.files;
  }
  selectImgAsset(event : any) {
    this.selectedImgAsset = event.target.files;
  }

  upload() {
    this.currentFile = this.selectedExcel?.item(0);
    this.obs = this.assetService.uploadFile(this.currentFile!)?.subscribe(result => {
      this.insertResDto = result
      if(this.insertResDto){
        this.router.navigateByUrl("/glexy/asset")
      }
    })
  }

  addData(){
    this.fileInvoice = this.selectedImgInvo?.item(0)
    this.fileAsset = this.selectedImgAsset?.item(0)
    this.insertSubs = this.assetService.insert(this.assetInsert, this.fileInvoice!, this.fileAsset!)?.subscribe(result => {
      this.insertResDto = result
      if(this.insertResDto){
        this.router.navigateByUrl("/glexy/asset")
      }
    }) 
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
    this.insertSubs?.unsubscribe()
  }

}

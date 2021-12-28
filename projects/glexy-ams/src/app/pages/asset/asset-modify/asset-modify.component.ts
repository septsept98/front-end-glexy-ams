import { Component, OnInit } from '@angular/core';
import { AssetType } from '@models/asset-type';
import { Brand } from '@models/brand';
import { Company } from '@models/company';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';

@Component({
  selector: 'app-asset-modify',
  templateUrl: './asset-modify.component.html',
  styleUrls: ['./asset-modify.component.css']
})
export class AssetModifyComponent implements OnInit {

  constructor() { }

  optionsBrand! : Options;
  optionsCompany! : Options;
  optionsAssetType! : Options;

  ngOnInit(): void {

    this.optionsCompany = {
      width:'100%',
      ajax: {
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

  }

}

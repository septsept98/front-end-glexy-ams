import { Component, OnInit } from '@angular/core';

import { StatusAssetService } from '@services/status-asset/status-asset.service';
import { StatusAsset } from '@models/status-asset';
import { Options } from 'select2';

@Component({
  selector: 'app-status-transaction-modify',
  templateUrl: './status-transaction-modify.component.html',
  styleUrls: ['./status-transaction-modify.component.css']
})
export class StatusTransactionModifyComponent implements OnInit {

  constructor(private statusAssetService: StatusAssetService) { }
  
  options: Options = {};

  dataSelected :string = ""

  ngOnInit(): void {
    this.options = {
      width : '200',
      ajax: {
        url: 'https://reqres.in/api/users',
        data: (params: any) => {
          return {
            q: params.term,
          }
        },
        processResults: (data: any) => {

          const dataArr: { id: any, email: any }[] = data.data

          const results = dataArr.map(d => {
            const dataMap = {
              id: d.id,
              text: d.email
            }

            return dataMap;
          });

          return { results };
        }
      }
    }
  }
}

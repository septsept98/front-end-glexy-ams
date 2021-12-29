import { Component, OnInit } from '@angular/core';
import { trxAssignType } from '@constant/trx-type'
import { InsertReqTransactionDto } from '@dto/transaction/insert-req-transaction-dto';
import { Asset } from '@models/asset';
import { Employee } from '@models/employee';
import { Location } from '@models/location';
import { Transactions } from '@models/transactions';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2'

@Component({
  selector: 'app-transaction-check-out',
  templateUrl: './transaction-check-out.component.html',
  styleUrls: ['./transaction-check-out.component.css']
})
export class TransactionCheckOutComponent implements OnInit {

  dataTransaction: InsertReqTransactionDto = new InsertReqTransactionDto()
  dataTrx: Transactions = new Transactions()

  listAssignType: AssignType[] = []
  assignTypeSelect: AssignType = new AssignType()
  assignTypeChange: string = ""

  employeeOn: boolean = false
  locationOn: boolean = false
  assetOn: boolean = false

  employeeSelected: Employee = new Employee()
  locationSelected: Location = new Location()
  assetGeneralSelected: Asset = new Asset()

  optionsEmployee!: Options
  optionsLocation!: Options
  optionsAsset!: Options

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= trxAssignType.size; i++) {
      let assignType: AssignType = new AssignType()
      assignType.code = trxAssignType.get(i)?.[0] ?? ""
      assignType.name = trxAssignType.get(i)?.[1] ?? ""
      this.listAssignType.push(assignType)
    }

    this.optionsEmployee = {
      width:'100%',
      ajax: {
        url: 'http://localhost:1234/employees/search/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result:Employee[] = data;
          const select2Data : Select2OptionData[] = []
          for (const Employee of result) {
            select2Data.push(
              {
                id: Employee.id!,
                text: Employee.nip! + " - " +  Employee.nameEmployee! + " - " + Employee.phoneNumber!
              }
            )
          }
          return {
            results: select2Data
          };
        }
      }
    }

    this.optionsLocation = {
      width:'100%',
      ajax: {
        url: 'http://localhost:1234/locations/search/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result:Location[] = data;
          const select2Data : Select2OptionData[] = []
          for (const Location of result) {
            select2Data.push(
              {
                id: Location.id!,
                text: Location.code! + " - " +  Location.namePlace!
              }
            )
          }
          return {
            results: select2Data
          };
        }
      }
    }

    this.optionsAsset = {
      width:'100%',
      ajax: {
        url: 'http://localhost:1234/assets/search-general-asset/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result:Asset[] = data;
          const select2Data : Select2OptionData[] = []
          for (const Asset of result) {
            select2Data.push(
              {
                id: Asset.id!,
                text: Asset.code! + " - " +  Asset.names! + " - " + Asset.brandId.names
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

  assignChange(data: any) {
    this.assignTypeChange = data.options[data.options.selectedIndex].value
    if(trxAssignType.get(1)?.[0] == this.assignTypeChange){
      this.employeeOn = true
      this.locationOn = false
      this.assetOn = false
      this.locationSelected = new Location()
      this.assetGeneralSelected = new Asset()
    } else if(trxAssignType.get(2)?.[0] == this.assignTypeChange){
      this.employeeOn = false
      this.locationOn = true
      this.assetOn = false
      this.employeeSelected = new Employee()
      this.assetGeneralSelected = new Asset()
    }else if(trxAssignType.get(3)?.[0] == this.assignTypeChange){
      this.employeeOn = false
      this.locationOn = false
      this.assetOn = true
      this.locationSelected = new Location()
      this.employeeSelected = new Employee()
    }
  }

  cek(): void {
    if(this.employeeSelected.id != null){
      this.dataTrx.employeeId = this.employeeSelected
    }else if(this.locationSelected.id != null){
      this.dataTrx.locationId = this.locationSelected
    }else if(this.assetGeneralSelected.id != null){
      this.dataTrx.assetGeneralId = this.assetGeneralSelected
    }
  }
}

class AssignType {
  code!: string
  name!: string
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trxAssignType } from '@constant/trx-type'
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { InsertReqDataAssetTransactionDto } from '@dto/transaction/insert-req-data-asset-transaction-dto';
import { InsertReqTransactionDto } from '@dto/transaction/insert-req-transaction-dto';
import { Asset } from '@models/asset';
import { Brand } from '@models/brand';
import { Employee } from '@models/employee';
import { Inventory } from '@models/inventory';
import { Location } from '@models/location';
import { TransactionDetail } from '@models/transaction-detail';
import { Transactions } from '@models/transactions';
import { AssetService } from '@services/asset/asset.service';
import { BrandService } from '@services/brand/brand.service';
import { TransactionService } from '@services/transaction/transaction.service'
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@services/auth/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-transaction-check-out',
  templateUrl: './transaction-check-out.component.html',
  styleUrls: ['./transaction-check-out.component.css']
})
export class TransactionCheckOutComponent implements OnInit {

  dataAllTransaction: InsertReqTransactionDto = new InsertReqTransactionDto()
  dataTrx: Transactions = new Transactions()
  dataDetailTrx: TransactionDetail[] = []

  listDataReqAsset: InsertReqDataAssetTransactionDto[] = []
  dataReqAsset: InsertReqDataAssetTransactionDto = new InsertReqDataAssetTransactionDto()

  listAssignType: AssignType[] = []
  listBrands: Brand[] = []
  listAssets: Asset[] = []
  listAssetSelected: Asset[] = []
  assignTypeSelect: AssignType = new AssignType()
  assignTypeChange: string = ""
  assetChange: string = ""
  stockAsset: number = 0
  qtyTrx: number = 0

  employeeOn: boolean = false
  locationOn: boolean = false
  assetOn: boolean = false

  employeeSelected: Employee = new Employee()
  locationSelected: Location = new Location()
  assetGeneralSelected: Asset = new Asset()
  inventorySelected: Inventory = new Inventory()

  optionsEmployee!: Options
  optionsLocation!: Options
  optionsAsset!: Options
  optionsInventory!: Options
  optionsInventoryComponent!: Options
  optionsInventoryLicense!: Options

  resInsert: InsertResDto = new InsertResDto()

  constructor(private brandService: BrandService,
    private assetService: AssetService,
    private transactionService: TransactionService,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
    private title :Title) {
      title.setTitle("Transaction Check Out")
     }

  ngOnInit(): void {
    this.dataDetailTrx
    for (let i = 1; i <= trxAssignType.size; i++) {
      let assignType: AssignType = new AssignType()
      assignType.code = trxAssignType.get(i)?.[0] ?? ""
      assignType.name = trxAssignType.get(i)?.[1] ?? ""
      this.listAssignType.push(assignType)
    }

    this.optionsEmployee = {
      width: '100%',
      ajax: {
        headers: { Authorization: `Bearer ${this.authService.getToken()}` },
        url: 'http://localhost:1234/employees/search/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result: Employee[] = data;
          const select2Data: Select2OptionData[] = []
          for (const Employee of result) {
            select2Data.push(
              {
                id: Employee.id!,
                text: Employee.nip! + " - " + Employee.nameEmployee! + " - " + Employee.phoneNumber!
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
      width: '100%',
      ajax: {
        headers: { Authorization: `Bearer ${this.authService.getToken()}` },
        url: 'http://localhost:1234/locations/search/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result: Location[] = data;
          const select2Data: Select2OptionData[] = []
          for (const Location of result) {
            select2Data.push(
              {
                id: Location.id!,
                text: Location.code! + " - " + Location.namePlace!
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
      width: '100%',
      ajax: {
        headers: { Authorization: `Bearer ${this.authService.getToken()}` },
        url: 'http://localhost:1234/assets/search-general-asset/',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result: Asset[] = data;
          const select2Data: Select2OptionData[] = []
          for (const Asset of result) {
            select2Data.push(
              {
                id: Asset.id!,
                text: Asset.code! + " - " + Asset.names! + " - " + Asset.brandId.names
              }
            )
          }
          return {
            results: select2Data
          };
        }
      }
    }

    this.optionsInventory = {
      width: '100%',
      ajax: {
        headers: { Authorization: `Bearer ${this.authService.getToken()}` },
        url: 'http://localhost:1234/inventories/search',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result: Inventory[] = data;
          const select2Data: Select2OptionData[] = []
          for (const Inventory of result) {
            select2Data.push(
              {
                id: Inventory.id!,
                text: Inventory.code! + " - " + Inventory.nameAsset!
              }
            )
          }
          return {
            results: select2Data
          };
        }
      }
    }

    this.optionsInventoryComponent = {
      width: '100%',
      ajax: {
        headers: { Authorization: `Bearer ${this.authService.getToken()}` },
        url: 'http://localhost:1234/inventories/search-component',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result: Inventory[] = data;
          const select2Data: Select2OptionData[] = []
          for (const Inventory of result) {
            select2Data.push(
              {
                id: Inventory.id!,
                text: Inventory.code! + " - " + Inventory.nameAsset!
              }
            )
          }
          return {
            results: select2Data
          };
        }
      }
    }

    this.optionsInventoryLicense = {
      width: '100%',
      ajax: {
        headers: { Authorization: `Bearer ${this.authService.getToken()}` },
        url: 'http://localhost:1234/inventories/search-not-license',
        data: function (params) {
          var query = {
            query: params.term,
          }
          return query;
        },
        processResults: function (data) {
          const result: Inventory[] = data;
          const select2Data: Select2OptionData[] = []
          for (const Inventory of result) {
            select2Data.push(
              {
                id: Inventory.id!,
                text: Inventory.code! + " - " + Inventory.nameAsset!
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
    if (trxAssignType.get(1)?.[0] == this.assignTypeChange) {
      this.employeeOn = true
      this.locationOn = false
      this.assetOn = false
      this.locationSelected = new Location()
      this.assetGeneralSelected = new Asset()
      this.dataAllTransaction = new InsertReqTransactionDto()
      this.dataTrx = new Transactions()
      this.dataDetailTrx = []
      this.listDataReqAsset = []
      this.dataReqAsset = new InsertReqDataAssetTransactionDto()
    } else if (trxAssignType.get(2)?.[0] == this.assignTypeChange) {
      this.employeeOn = false
      this.locationOn = true
      this.assetOn = false
      this.employeeSelected = new Employee()
      this.assetGeneralSelected = new Asset()
      this.dataAllTransaction = new InsertReqTransactionDto()
      this.dataTrx = new Transactions()
      this.dataDetailTrx = []
      this.listDataReqAsset = []
      this.dataReqAsset = new InsertReqDataAssetTransactionDto()
    } else if (trxAssignType.get(3)?.[0] == this.assignTypeChange) {
      this.employeeOn = false
      this.locationOn = false
      this.assetOn = true
      this.locationSelected = new Location()
      this.employeeSelected = new Employee()
      this.dataAllTransaction = new InsertReqTransactionDto()
      this.dataTrx = new Transactions()
      this.dataDetailTrx = []
      this.listDataReqAsset = []
      this.dataReqAsset = new InsertReqDataAssetTransactionDto()
    }
  }

  onAssetChange(data: any): void {
    this.assetChange = data
    if (this.assetChange) {
      this.brandService.getAllFilter(this.assetChange)?.subscribe(res => {
        this.listBrands = res
        this.stockAsset = 0
        this.qtyTrx = 0
        let brands: Brand = new Brand()
        brands.id = '0'
        brands.code = 'Nn'
        brands.names = 'Select Brand'
        brands.isActive = true
        this.listBrands.unshift(brands)
      })
    }
  }

  onBrandChange(data: any): void {
    let idBrand: string = data.options[data.options.selectedIndex].value
    if (idBrand) {
      this.assetService.getByInventBrand(this.dataReqAsset)?.subscribe(result => {
        this.listAssets = result
        for (let j = 0; j < this.dataDetailTrx.length; j++) {
          this.listAssets = this.listAssets.filter(result =>
            this.dataDetailTrx[j].assetId.id != result.id
          )
        }
        this.stockAsset = this.listAssets.length
      })
    }
  }

  onAddAsset(): void {
    this.dataReqAsset.qty = this.qtyTrx
    this.dataReqAsset.stock = this.stockAsset
    if (this.dataReqAsset.brandId == null) {
      this.toastr.error("Fill The Form", 'Error')
    } else {
      if (this.qtyTrx > 0 && this.qtyTrx <= this.stockAsset) {
        for (let i = 0; i < this.qtyTrx; i++) {
          let detailTrx: TransactionDetail = new TransactionDetail()
          detailTrx.assetId = this.listAssets[i]
          this.dataDetailTrx.push(detailTrx)
        }
        this.listDataReqAsset.push(this.dataReqAsset)
        this.stockAsset = 0
        this.qtyTrx = 0
      } else {
        this.toastr.error("Out of Stock", 'Error')
      }
    }
  }

  onRemove(index: number): void {
    this.dataDetailTrx = this.dataDetailTrx.filter(result =>
      this.dataDetailTrx[index].assetId.id != result.assetId.id)
  }

  onSubmit(): void {
    if (this.dataTrx.description == null || this.dataDetailTrx.length <= 0) {
    this.toastr.error("Fill The Form", 'Error')
    } else {
    if (this.employeeSelected.id != null) {
        this.dataTrx.employeeId = this.employeeSelected
      } else if (this.locationSelected.id != null) {
        this.dataTrx.locationId = this.locationSelected
      } else if (this.assetGeneralSelected.id != null) {
        this.dataTrx.assetGeneralId = this.assetGeneralSelected
      }
      this.dataAllTransaction.dataTransaction = this.dataTrx
      this.dataAllTransaction.dataDetailTransaction = this.dataDetailTrx
      this.transactionService.insert(this.dataAllTransaction)?.subscribe(res => {
        this.resInsert = res
        console.log(this.dataAllTransaction)
        this.router.navigateByUrl('/glexy/transaction/check-in')
      })
    }
  }
}

class AssignType {
  code!: string
  name!: string
}

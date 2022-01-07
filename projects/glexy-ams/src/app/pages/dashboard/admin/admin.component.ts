import { Component, OnInit } from '@angular/core';
import { AssetService } from '@services/asset/asset.service';
import { CompanyService } from '@services/company/company.service';
import { EmployeeService } from '@services/employee/employee.service';
import { TransactionDetailService } from '@services/transaction-detail/transaction-detail.service';
import { TransactionService } from '@services/transaction/transaction.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private assetService :AssetService, private companyService :CompanyService,
    private employeeService :EmployeeService, private transactionService :TransactionService,
    private transactionDetailService :TransactionDetailService) { }

  totalAsset :number = 0;
  totalEmployee :number = 0;
  totalCompany :number = 0;
  totalExpiredAsset :number = 0;
  totalCheckOut :number = 0;
  totalCheckIn :number = 0;
  percent :number = 0;
  totalNotCheckIn :number = 0;
  totalTransactionDetail :number =0;

  ngOnInit(): void {

    this.assetService.getAll()?.subscribe(result => this.totalAsset = result.length)
    this.companyService.getAll()?.subscribe(result => this.totalCompany = result.length)
    this.employeeService.getAll()?.subscribe(result => this.totalEmployee = result.length)
    this.assetService.getExpiredAsset()?.subscribe(result => this.totalExpiredAsset = result.length)
    this.transactionService.getAll()?.subscribe(result => this.totalCheckOut = result.length)
    this.transactionDetailService.getAllCheckIn()?.subscribe(result => {this.totalCheckIn = result.length
      this.transactionDetailService.getAllNotCheckIn()?.subscribe(result => {this.totalNotCheckIn = result.length
        this.transactionDetailService.getAll()?.subscribe(result => {this.totalTransactionDetail = result.length
            this.percent = (this.totalNotCheckIn/this.totalTransactionDetail)*100
        })
      })
    })
    
    
  }

}

import { Component, OnInit } from '@angular/core';
import { AssetService } from '@services/asset/asset.service';
import { CompanyService } from '@services/company/company.service';
import { EmployeeService } from '@services/employee/employee.service';
import { TransactionDetailService } from '@services/transaction-detail/transaction-detail.service';
import { TransactionService } from '@services/transaction/transaction.service';
import { forkJoin } from 'rxjs';

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
  totalPending :number = 0;
  totalArchived :number = 0;
  percent :number = 0;
  totalNotCheckIn :number = 0;
  totalTransactionDetail :number =0;
  percentCheckIn :number =0;
  percentDeployable :number =0;
  totalDeployable :number = 0;
  totalCheckIn :number = 0;
  ngOnInit(): void {
 
    this.assetService.getAll()?.subscribe(result => this.totalAsset = result.length)
    this.companyService.getAll()?.subscribe(result => this.totalCompany = result.length)
    this.employeeService.getAll()?.subscribe(result => this.totalEmployee = result.length)
    this.assetService.getExpiredAsset()?.subscribe(result => this.totalExpiredAsset = result.length)
    this.assetService.getPendingAsset()?.subscribe(result => this.totalPending = result.length)
    this.assetService.getArchivedAsset()?.subscribe(result => {this.totalArchived = result.length
     this.transactionDetailService.getAllCheckIn()?.subscribe(result => this.totalCheckIn = result.length) 
      this.transactionDetailService.getAllNotCheckIn()?.subscribe(result => {this.totalNotCheckIn = result.length
        this.transactionDetailService.getAll()?.subscribe(result => {this.totalTransactionDetail = result.length
        
            this.assetService.getAllDeployAsset()?.subscribe(result =>{this.totalDeployable = result.length
              this.percent = (this.totalNotCheckIn/this.totalTransactionDetail)*100
              this.percentCheckIn =(this.totalCheckIn/this.totalTransactionDetail)*100
              this.percentDeployable =(this.totalDeployable/this.totalAsset)*100
            })
        })
      })
    })
    
    
  }

}

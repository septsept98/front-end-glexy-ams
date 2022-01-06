import { Component, OnInit } from '@angular/core';
import { AssetService } from '@services/asset/asset.service';
import { CompanyService } from '@services/company/company.service';
import { EmployeeService } from '@services/employee/employee.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private assetService :AssetService, private companyService :CompanyService,
    private employeeService :EmployeeService) { }

  totalAsset :number = 0;
  totalEmployee :number = 0;
  totalCompany :number = 0;

  ngOnInit(): void {

    this.assetService.getAll()?.subscribe(result => this.totalAsset = result.length)
    this.companyService.getAll()?.subscribe(result => this.totalCompany = result.length)
    this.employeeService.getAll()?.subscribe(result => this.totalEmployee = result.length)
  }

}

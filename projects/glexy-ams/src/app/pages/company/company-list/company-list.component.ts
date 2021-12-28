import { Component, OnDestroy, OnInit } from '@angular/core';
import { Company } from '@models/company';
import { File } from '@models/file';
import { CompanyService } from '@services/company/company.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit, OnDestroy {

  selectedCompany: Company[] = []
  dataList: Company[] = []
  obs? : Subscription
  
  constructor(private companyService : CompanyService) { }
  
  ngOnInit(): void {
    this.companyService.getAll()?.subscribe(result => this.dataList = result)

  }

  isDisplayAvail(file: File) : boolean {
    if(file) {
      return true
    } else {
      return false
    }
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe
  }

}


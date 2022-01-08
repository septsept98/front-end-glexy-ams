import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteResDto } from '@dto/all-respons/delete-res-dto';
import { Company } from '@models/company';
import { File } from '@models/file';
import { CompanyService } from '@services/company/company.service';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  providers: [ConfirmationService]
})
export class CompanyListComponent implements OnInit, OnDestroy {

  deleteResDto: DeleteResDto = new DeleteResDto()
  selectedCompany: Company[] = []
  dataList: Company[] = []
  obs? : Subscription
  delSubs? : Subscription
  
  constructor(private companyService : CompanyService, private router : Router, private confirmDialogService: ConfirmationService) { }
  
  ngOnInit(): void {
    this.initData()
    
  }

  initData(): void {
    this.companyService.getAll()?.subscribe(result => {
      this.dataList = result
    })
  }

  isDisplayAvail(file: File) : boolean {
    if(file) {
      return true
    } else {
      return false
    }
  }

  onUpdate(id : number): void{
    this.router.navigateByUrl(`/glexy/company/${id}`)
  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
    this.delSubs?.unsubscribe()
  }

  onDelete(id: string): void {
    this.obs = this.companyService.getById(id)?.subscribe(result => {
      this.confirmDialogService.confirm({
        message: 'Are you sure to delete ' + result.names + ' ?',
        accept: () => {
          this.delSubs = this.companyService.delete(id)?.subscribe(result => {
            this.deleteResDto = result
            this.initData()
          })
        }
      })
    })
  }

}


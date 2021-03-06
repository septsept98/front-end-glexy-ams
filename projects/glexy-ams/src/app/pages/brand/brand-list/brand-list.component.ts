import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '@models/brand';
import { BrandService } from '@services/brand/brand.service';
import { DeleteResDto } from '@dto/all-respons/delete-res-dto'
import { Subscription } from 'rxjs';
import { ConfirmationService } from 'primeng/api';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css'],
  providers: [ConfirmationService]
})
export class BrandListComponent implements OnInit, OnDestroy {

  constructor(private brandService : BrandService, 
    private router : Router, 
    private confirmDialogService: ConfirmationService,
    private title :Title) {
      title.setTitle("Brand")
     }

  deleteResDto : DeleteResDto = new DeleteResDto()
  selectedBrand: Brand[] = []
  dataList: Brand[] = []
  obs? : Subscription
  delSubs? : Subscription

  ngOnInit(): void {
    this.initData()
  }
  
  initData(): void {
    this.brandService.getAll()?.subscribe(result => {
      this.dataList = result
    })
    
  }

  ngOnDestroy(): void{
    this.obs?.unsubscribe()
    this.delSubs?.unsubscribe()
  }

  onUpdate(id : number): void{
    this.router.navigateByUrl(`/glexy/brand/${id}`)
  }

  onDelete(id : string): void {
    this.obs = this.brandService.getById(id)?.subscribe(result => {
      this.confirmDialogService.confirm({
        message: 'Are you sure to delete ' + result.names + ' ?',
        accept: () => {
          this.delSubs = this.brandService.delete(id)?.subscribe(result => {
            this.deleteResDto = result
            this.initData()
          })
        }
      })
    })
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '@models/brand';
import { BrandService } from '../../../../../../core/src/app/services/brand/brand.service';
import { DeleteResDto } from '../../../../../../core/src/app/dto/all-respons/delete-res-dto'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit, OnDestroy {

  constructor(private brandService : BrandService, private router : Router) { }
  deleteResDto : DeleteResDto = new DeleteResDto()
  selectedBrand: Brand[] = []
  dataList: Brand[] = []
  obs? : Subscription

  ngOnInit(): void {
    
    this.brandService.getAll()?.subscribe(result => this.dataList = result)

  }

  ngOnDestroy(): void{
    this.obs?.unsubscribe()
  }

  onUpdate(id : number): void{
    this.router.navigateByUrl(`/glexy/brand/${id}`)
  }

  onDelete(id : string): void {
    this.brandService.delete(id)?.subscribe(result => {
      this.deleteResDto = result
      if(this.deleteResDto) {
        window.location.reload()
      }
    })
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { Brand } from '@models/brand';
import { BrandService } from '@services/brand/brand.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-brand-modify',
  templateUrl: './brand-modify.component.html',
  styleUrls: ['./brand-modify.component.css']
})
export class BrandModifyComponent implements OnInit, OnDestroy{

  brandInsert : Brand = new Brand()
  dataBrand : InsertResDto = new InsertResDto()
  updateResDto: UpdateResDto = new UpdateResDto()
  brandId? : string | null
  save: boolean = true
  tab: boolean = false
  dataSubs?: Subscription
  insertSubs?: Subscription
  updateSubs?: Subscription

  constructor(private brandService: BrandService, private router: Router, private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.brandId = this.activedRoute.snapshot.paramMap.get('id')
    if(this.brandId) {
      this.dataSubs = this.brandService.getById(this.brandId)?.subscribe(result => {
        this.save = false
        this.tab = true
        this.brandInsert = result
      })
    }
  }

  addDb(): void {
    if(this.brandId) {
      this.updateSubs = this.brandService.update(this.brandInsert)?.subscribe( result => {
        this.updateResDto = result
        this.router.navigateByUrl('/glexy/brand/list')
      })
    } else {
      this.brandService.insert(this.brandInsert)?.subscribe(result => {
        if(result.data) {
          this.dataBrand = result
          if(this.dataBrand){
            this.router.navigateByUrl("/glexy/brand/list")
  
          }
        }
      })

    }
  }

  onCancel() :void{
    this.router.navigateByUrl('/glexy/company/list')

  }

  ngOnDestroy(): void {
    this.dataSubs?.unsubscribe()
    this.insertSubs?.unsubscribe()
    this.updateSubs?.unsubscribe()
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { Brand } from '@models/brand';
import { BrandService } from '@services/brand/brand.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-brand-modify',
  templateUrl: './brand-modify.component.html',
  styleUrls: ['./brand-modify.component.css']
})
export class BrandModifyComponent implements OnInit, OnDestroy{

  brandInsert! : Brand
  dataBrand? : InsertResDto
  obs? : Subscription

  constructor(private brandService: BrandService, private router: Router) { }

  ngOnInit(): void {
    this.brandInsert = new Brand()
    this.dataBrand = new InsertResDto()
  }

  addDb(): void {
    this.brandService.insert(this.brandInsert)?.subscribe(result => {
      if(result.data) {
        this.dataBrand = result
        if(this.dataBrand){
          this.router.navigateByUrl("/glexy/brand/list")

        }
      }
    })
  }

  ngOnDestroy(): void{
    this.obs?.unsubscribe()
  }

}

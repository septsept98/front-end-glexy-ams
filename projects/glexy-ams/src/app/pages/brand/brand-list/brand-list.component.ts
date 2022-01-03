import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand } from '@models/brand';
import { BrandService } from '@services/brand/brand.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit, OnDestroy {

  constructor(private brandService : BrandService, private router : Router) { }
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

}

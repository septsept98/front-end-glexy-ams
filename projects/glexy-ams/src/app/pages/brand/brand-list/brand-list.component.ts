import { Component, OnInit } from '@angular/core';
import { Brand } from '@models/brand';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.css']
})
export class BrandListComponent implements OnInit {

  constructor() { }
  selectedBrand : Brand[] = []
  listBrand: BrandDummy[] = []

  ngOnInit(): void {
    
    this.listBrand = [
      {names: 'Samsung', code: 'GNR'},
      {names: 'Sumsang', code: 'SMG'},
      {names: 'Lenovo', code: 'LKJ'},
      {names: 'Voleno', code: 'POI'},
      {names: 'Acer', code: 'HKI'},
      {names: 'Cera', code: 'WWE'},
      {names: 'Asus', code: 'QWE'},
      {names: 'Snsv', code: 'RTY'},
      {names: 'Iphone', code: 'ASD'},
      {names: 'Apple', code: 'NMA'},
      {names: 'Mango', code: 'MNG'},
      {names: 'Aqua', code: 'AQU'}
    ]
  }

}

class BrandDummy {
  names! : string
  code! : string 
}

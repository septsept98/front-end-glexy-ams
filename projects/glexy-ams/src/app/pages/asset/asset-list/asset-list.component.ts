import { Component, OnInit } from '@angular/core';
import { Asset } from '@models/asset';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  constructor() { }

  assetList: AssetDummy[] = []
  selectedAsset: Asset[] = []

  ngOnInit(): void {

    this.assetList = [
      {names: 'Laptop',  code: 'LTPLWN1', brand: 'Samsung', statusAsset: 'Available', inventory: 'LTP', company: 'Lawencon', image: '', invoice: 'GJK08779'},
      {names: 'Laptop',  code: 'LTPLWN2', brand: 'Samsung', statusAsset: 'Available', inventory: 'LTP', company: 'Lawencon', image: '', invoice: 'GJK08779'},
      {names: 'Laptop',  code: 'LTPLWN3', brand: 'Samsung', statusAsset: 'Available', inventory: 'LTP', company: 'Lawencon', image: '', invoice: 'GJK08779'},
      {names: 'Laptop',  code: 'LTPLWN4', brand: 'Samsung', statusAsset: 'Available', inventory: 'LTP', company: 'Lawencon', image: '', invoice: 'GJK08779'},
      {names: 'Laptop',  code: 'LTPLWN5', brand: 'Samsung', statusAsset: 'Available', inventory: 'LTP', company: 'Lawencon', image: '', invoice: 'GJK08779'},
      {names: 'Laptop',  code: 'LTPLWN6', brand: 'Samsung', statusAsset: 'Available', inventory: 'LTP', company: 'Lawencon', image: '', invoice: 'GJK08779'},
      {names: 'Laptop',  code: 'LTPLWN7', brand: 'Samsung', statusAsset: 'Available', inventory: 'LTP', company: 'Lawencon', image: '', invoice: 'GJK08779'},
      {names: 'Laptop',  code: 'LTPLWN8', brand: 'Samsung', statusAsset: 'Available', inventory: 'LTP', company: 'Lawencon', image: '', invoice: 'GJK08779'},
      {names: 'Spidol',  code: 'SPLLNV1', brand: 'Snowman', statusAsset: 'Available', inventory: 'SPL', company: 'Linov', image: '', invoice: 'GYY08999'},
      {names: 'Spidol',  code: 'SPLLNV1', brand: 'Snowman', statusAsset: 'Available', inventory: 'SPL', company: 'Linov', image: '', invoice: 'GYY08999'}
    ]

  }

}

class AssetDummy {
  names! : string
  code! : string
  company! : string
  brand! : string
  statusAsset! : string
  inventory! : string
  invoice! : string
  image! : string

}

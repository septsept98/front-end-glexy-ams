import { Component, OnInit } from '@angular/core';
import { Inventory } from '@models/inventory';
import { InventoryService } from '@services/inventory/inventory.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {

  selectedInven: Inventory[] = []
  dataList: Inventory[] = []
  obs? : Subscription
  
  constructor(private inventoryService : InventoryService) { }

  ngOnInit(): void {
    this.inventoryService.getAll()?.subscribe(result => this.dataList = result)
    

  }

}


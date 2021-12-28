import { Component, OnDestroy, OnInit } from '@angular/core';
import { Invoice } from '@models/invoice';
import { InvoiceService } from '@services/invoice/invoice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit, OnDestroy {

  selectedInvoice: Invoice[] = []
  dataList: Invoice[] = []
  obs? : Subscription
  
  constructor(private invoiceService : InvoiceService) { }

  ngOnInit(): void {
    this.invoiceService.getAll()?.subscribe(result => this.dataList = result)
    
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


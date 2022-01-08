import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { Invoice } from '@models/invoice';
import { InvoiceService } from '@services/invoice/invoice.service';

@Component({
  selector: 'app-invoice-modify',
  templateUrl: './invoice-modify.component.html',
  styleUrls: ['./invoice-modify.component.css']
})
export class InvoiceModifyComponent implements OnInit {

  constructor(private activeRoute : ActivatedRoute, private invoiceService : InvoiceService, 
    private router : Router, private title :Title) {
      title.setTitle("Invoice Update")
     }

  invoice : Invoice = new Invoice()
  updateResDto : UpdateResDto = new UpdateResDto()
  fileImg! : File | null
  selectedImg! : FileList

  ngOnInit(): void {
    const data = this.activeRoute.snapshot.paramMap.get('id')
    if(data){
      this.invoiceService.getById(data)?.subscribe(result => this.invoice = result)
    }
  }

  selectFile(event : any) {
    this.selectedImg = event.target.files;
  }

  onUpdate(): void {
    this.fileImg = this.selectedImg?.item(0);
    this.invoiceService.update(this.invoice,this.fileImg!)?.subscribe(result => {
      this.updateResDto = result
      if(this.updateResDto){
        this.router.navigateByUrl("/glexy/invoice/list")
      }
    })
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { Company } from '@models/company';
import { CompanyService } from '@services/company/company.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-company-modify',
  templateUrl: './company-modify.component.html',
  styleUrls: ['./company-modify.component.css']
})
export class CompanyModifyComponent implements OnInit, OnDestroy {

  insertResDto: InsertResDto = new InsertResDto();
  companyInsert: Company = new Company();
  file!: File | null
  selectedFile!: FileList;
  obs? : Subscription

  constructor(private companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.obs?.unsubscribe()
  }

  addData(){
      this.file = this.selectedFile?.item(0)
      this.companyService.insert(this.companyInsert, this.file)?.subscribe(result => {
        this.insertResDto = result
        if(this.insertResDto){
          this.router.navigateByUrl("/glexy/company/list")
        }
      })
    
  }

  selectFile(event : any) {
    this.selectedFile = event.target.files;
  }

}

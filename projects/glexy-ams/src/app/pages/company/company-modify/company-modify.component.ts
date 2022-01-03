import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { Company } from '@models/company';
import { CompanyService } from '@services/company/company.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-company-modify',
  templateUrl: './company-modify.component.html',
  styleUrls: ['./company-modify.component.css']
})
export class CompanyModifyComponent implements OnInit, OnDestroy {

  insertResDto: InsertResDto = new InsertResDto()
  updateResDto: UpdateResDto = new UpdateResDto()
  companyInsert: Company = new Company()
  companyId? : string | null
  save: boolean = true
  tab: boolean = false
  file!: File | null
  imageUpdate! : File | null
  selectedFile!: FileList
  selectedImage!: FileList
  dataSubs?: Subscription
  insertSubs?: Subscription
  updateSubs?: Subscription

  constructor(private companyService: CompanyService, private router: Router, private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.companyId = this.activedRoute.snapshot.paramMap.get('id')

    if(this.companyId) {
      this.dataSubs = this.companyService.getById(this.companyId)?.subscribe(result => {
        this.save = false
        this.tab = true
        this.companyInsert = result
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

  addData(){
    if(this.companyId){
      this.updateSubs = this.companyService.update(this.companyInsert)?.subscribe( result => {
        this.updateResDto = result
        this.router.navigateByUrl('/glexy/company/list')
      })
    } else {
      this.file = this.selectedFile?.item(0)
      this.companyService.insert(this.companyInsert, this.file)?.subscribe(result => {
        this.insertResDto = result
        if(this.insertResDto){
          this.router.navigateByUrl("/glexy/company/list")
        }
      }) 

    }
  }

  onUpdateImg() {
    this.imageUpdate = this.selectedImage.item(0)
      this.companyService.updateImage(this.companyInsert, this.imageUpdate!)?.subscribe(result => {
        this.updateResDto = result
        if(this.updateResDto){
          this.router.navigateByUrl("/glexy/company/list")
        }
      }) 
  }

  selectFile(event : any) {
    this.selectedFile = event.target.files;
  }
  selectImage(event : any) {
    this.selectedImage = event.target.files;
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { Company } from '@models/company';
import { Employee } from '@models/employee';
import { CompanyService } from '@services/company/company.service';
import { EmployeeService } from '@services/employee/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-modify',
  templateUrl: './employee-modify.component.html',
  styleUrls: ['./employee-modify.component.css']
})
export class EmployeeModifyComponent implements OnInit, OnDestroy {

  listCompany:Company[] = []

  data:Employee = new Employee()
  company:Company = new Company()

  insertResDto :InsertResDto = new InsertResDto()
  updateResDto :UpdateResDto = new UpdateResDto()
  save:boolean = true
  employeeId?:string|null 
  dataSubs?: Subscription
  insertSubs?: Subscription
  updateSubs?: Subscription
  listCompanySubs? :Subscription

  constructor(private activedRoute:ActivatedRoute, private companyService:CompanyService,
    private employeeService:EmployeeService, private router :Router,
    private title :Title) {
      title.setTitle("Employee Create")
     }

  ngOnInit(): void {

    this.employeeId = this.activedRoute.snapshot.paramMap.get('id')

    if(this.employeeId){
      this.title.setTitle("Employee Update")
      this.dataSubs = this.employeeService.getById(this.employeeId)?.subscribe(result => {
        this.save = false
        this.data = result
      })
    }
    this.data.companyId = this.company
    this.listCompanySubs = this.companyService.getAll()?.subscribe(result => this.listCompany = result)
  }

  onCancel() :void{

    this.router.navigateByUrl('/glexy/employee')

  }

  add(){
    if(this.employeeId){
      this.updateSubs = this.employeeService.update(this.data)?.subscribe(result =>{
        this.updateResDto = result
        this.router.navigateByUrl('/glexy/employee')
      })
    }else{
      this.insertSubs = this.employeeService.insert(this.data)?.subscribe(result =>{
        this.insertResDto = result
        this.router.navigateByUrl('/glexy/employee')
      })
    }
  }

  ngOnDestroy(): void {

    this.dataSubs?.unsubscribe()
    this.updateSubs?.unsubscribe()
    this.insertSubs?.unsubscribe()
    this.listCompanySubs?.unsubscribe()

  }

}

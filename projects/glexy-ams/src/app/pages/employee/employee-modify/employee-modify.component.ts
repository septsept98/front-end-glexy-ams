import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { Company } from '@models/company';
import { Employee } from '@models/employee';
import { CompanyService } from '@services/company/company.service';
import { EmployeeService } from '@services/employee/employee.service';

@Component({
  selector: 'app-employee-modify',
  templateUrl: './employee-modify.component.html',
  styleUrls: ['./employee-modify.component.css']
})
export class EmployeeModifyComponent implements OnInit {

  listCompany:Company[] = []

  data:Employee = new Employee()
  company:Company = new Company()

  insertResDto :InsertResDto = new InsertResDto();
  updateResDto :UpdateResDto = new UpdateResDto();
  save:boolean = true;
  employeeId?:string|null 

  constructor(private activedRoute:ActivatedRoute, private companyService:CompanyService,
    private employeeService:EmployeeService, private router :Router) { }

  ngOnInit(): void {

    this.employeeId = this.activedRoute.snapshot.paramMap.get('id')

    if(this.employeeId){

      this.employeeService.getById(this.employeeId)?.subscribe(result => {
        this.save = false
        this.data = result
      })
    }
    this.data.companyId = this.company
    this.companyService.getAll()?.subscribe(result => this.listCompany = result)
  }

  onCancel() :void{

    this.router.navigateByUrl('/glexy/employee/list')

  }

  add(){
    if(this.employeeId){
      this.employeeService.update(this.data)?.subscribe(result =>{
        this.updateResDto = result
        this.router.navigateByUrl('/glexy/employee/list')
      })
    }else{
      this.employeeService.insert(this.data)?.subscribe(result =>{
        this.insertResDto = result
        this.router.navigateByUrl('/glexy/employee/list')
      })
    }
    

  }

}

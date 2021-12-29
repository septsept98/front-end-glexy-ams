import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InsertResDto } from '@dto/all-respons/insert-res-dto';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { Company } from '@models/company';
import { Employee } from '@models/employee';
import { Roles } from '@models/roles';
import { Users } from '@models/users';
import { CompanyService } from '@services/company/company.service';
import { RolesService } from '@services/roles/roles.service';
import { UsersService } from '@services/users/users.service';

@Component({
  selector: 'app-users-modify',
  templateUrl: './users-modify.component.html',
  styleUrls: ['./users-modify.component.css']
})
export class UsersModifyComponent implements OnInit {

  data:Users = new Users()
  role:Roles = new Roles()
  employee:Employee = new Employee()
  company:Company = new Company
  insertResDto :InsertResDto = new InsertResDto()
  updateResDto :UpdateResDto = new UpdateResDto()
  UserId? :string|null
  listCompany :Company[] = []
  listRoles :Roles[] = []
  save :boolean = true
  selectedFile!:FileList
  file! :File |null 

  constructor(private companyService:CompanyService, private rolesService :RolesService,
    private usersService:UsersService, private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {

    this.UserId = this.activatedRoute.snapshot.paramMap.get('id')

    if(this.UserId){

      this.usersService.getById(this.UserId)?.subscribe(result=>{

        this.save = false
         this.data = result
      })
      
    }

    this.data.employeeId = this.employee
    this.data.rolesId = this.role
    this.data.employeeId.companyId = this.company
    
    this.companyService.getAll()?.subscribe(result => this.listCompany = result)
    this.rolesService.getAll()?.subscribe(result => this.listRoles = result)

  }

  selectFile(event :any){

    this.selectedFile = event.target.files
    
  }

  add(){
    this.data.employeeId.emailEmployee = this.data.email
    if(this.UserId){
      
      this.usersService.update(this.data)?.subscribe(result => this.updateResDto = result)
    }else{
    this.file = this.selectedFile?.item(0)
    this.usersService.insert(this.data,this.file)?.subscribe(result =>{
      this.insertResDto = result
    })
  }
  }

}

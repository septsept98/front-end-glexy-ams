import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  userId? :string|null
  listCompany :Company[] = []
  listRoles :Roles[] = []
  save :boolean = true
  selectedFile!:FileList
  file! :File |null 

  constructor(private companyService:CompanyService, private rolesService :RolesService,
    private usersService:UsersService, private activatedRoute :ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.userId = this.activatedRoute.snapshot.paramMap.get('id')

    if(this.userId){

      this.usersService.getById(this.userId)?.subscribe(result=>{

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

  selectFile(event :any) :void{

    this.selectedFile = event.target.files
    
  }
  
  onCancel() :void{

    this.router.navigateByUrl('/glexy/users/list')

  }

  add() :void{
    this.data.employeeId.emailEmployee = this.data.email
    if(this.userId){
      
      this.usersService.update(this.data)?.subscribe(result => this.updateResDto = result)
      this.router.navigateByUrl('/glexy/users/list')
    }else{
    this.file = this.selectedFile?.item(0)
    this.usersService.insert(this.data,this.file)?.subscribe(result =>{
      this.insertResDto = result
    })
    this.router.navigateByUrl('/glexy/users/list')
  }
  }

}

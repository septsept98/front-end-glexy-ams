import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteResDto } from '@dto/all-respons/delete-res-dto';
import { Employee } from '@models/employee';
import { EmployeeService } from '@services/employee/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  listEmployee: Employee[] = []
  selectedEmployee: Employee[] = []
  private unSubs?: Subscription;
  deleteResDto :DeleteResDto = new DeleteResDto()

  constructor(private employeeService :EmployeeService, private router :Router) { }

  ngOnInit(): void {

    this.employeeService.getAll()?.subscribe(result => this.listEmployee = result)

  }

  onCreate() :void{

    this.router.navigateByUrl(`/glexy/employee/new`)

  }

  onUpdate(id :string) :void{

    this.router.navigateByUrl(`/glexy/employee/${id}`)

  }

  onDelete(idDelete :string) :void{

    this.employeeService.delete(idDelete)?.subscribe(result => { this.deleteResDto = result
       this.employeeService.getAll()?.subscribe(result => this.listEmployee = result)
    })
  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

}

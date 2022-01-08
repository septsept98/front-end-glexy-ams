import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
export class EmployeeListComponent implements OnInit, OnDestroy {

  listEmployee: Employee[] = []
  selectedEmployee: Employee[] = []
  deleteResDto :DeleteResDto = new DeleteResDto()
  dataSubs?: Subscription
  deleteSubs?: Subscription
  dataDelSubs?: Subscription

  constructor(private employeeService :EmployeeService, private router :Router,
    private title :Title) { 
      title.setTitle("Emloyee")
    }

  ngOnInit(): void {

    this.dataSubs = this.employeeService.getAll()?.subscribe(result => {
      this.listEmployee = result
    })

  }

  onCreate() :void{

    this.router.navigateByUrl(`/glexy/employee/new`)

  }

  onUpdate(id :string) :void{

    this.router.navigateByUrl(`/glexy/employee/${id}`)

  }

  onDelete(idDelete :string) :void{
      this.employeeService.getById(idDelete)?.subscribe(result => {
        if (confirm("Are you sure to delete " + result.nameEmployee)) {
      this.deleteSubs = this.employeeService.delete(idDelete)?.subscribe(result => { this.deleteResDto = result
        this.dataDelSubs = this.employeeService.getAll()?.subscribe(result => this.listEmployee = result)
    })
  }})
  }

  ngOnDestroy(): void {
    this.dataSubs?.unsubscribe()
    this.deleteSubs?.unsubscribe()
    this.dataDelSubs?.unsubscribe()
  }

}

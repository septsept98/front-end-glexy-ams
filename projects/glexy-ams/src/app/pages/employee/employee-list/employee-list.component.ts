import { Component, OnInit } from '@angular/core';
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

  constructor(private employeeService :EmployeeService) { }

  ngOnInit(): void {

    this.employeeService.getAll()?.subscribe(result => this.listEmployee = result)

  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

}

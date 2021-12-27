import { Component, OnInit } from '@angular/core';
import { Employee } from '@models/employee';
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

  constructor() { }

  ngOnInit(): void {

    this.listEmployee = [
      {nameEmployee:'glenn',emailEmployee:'glenn@gmail.com',nip:'321726372',phoneNumber:'0895610516196',companyId:{names:'linov'}}
    ]

  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

}

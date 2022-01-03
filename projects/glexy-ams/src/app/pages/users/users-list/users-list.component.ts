import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteResDto } from '@dto/all-respons/delete-res-dto';
import { UpdateResDto } from '@dto/all-respons/update-res-dto';
import { Users } from '@models/users';
import { UsersService } from '@services/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {

  listUsers: Users[] = []
  selectedUsers: Users[] = []
  deleteResDto :DeleteResDto = new DeleteResDto()
  dataSubs?: Subscription
  deleteSubs?: Subscription
  dataDelSubs?: Subscription
  updateResDto :UpdateResDto = new UpdateResDto()

  constructor(private usersService :UsersService, private router :Router) { }

  ngOnInit(): void {

    this.dataSubs = this.usersService.getAll()?.subscribe(result => this.listUsers = result)

  }

  onCreate() :void{

    this.router.navigateByUrl('/glexy/users/new')

  }

  onUpdate(id :string) :void{

    this.router.navigateByUrl(`/glexy/users/${id}`)

  }

  onDelete(id :string) :void{
    this.usersService.getById(id)?.subscribe(result => {
      if (confirm("Are you sure to delete "+result.email )) {
    this.deleteSubs = this.usersService.delete(id)?.subscribe(result =>{this.deleteResDto = result
      this.dataDelSubs = this.usersService.getAll()?.subscribe(result => this.listUsers = result)
    } )
  }})
  }

  onResetPassword(id :string) :void{

    this.deleteSubs = this.usersService.resetPassword(id)?.subscribe(result =>{this.updateResDto = result
      this.dataDelSubs = this.usersService.getAll()?.subscribe(result => this.listUsers = result)
    } )
  }

  ngOnDestroy(): void {
    this.dataSubs?.unsubscribe()
    this.deleteSubs?.unsubscribe()
    this.dataDelSubs?.unsubscribe()
  }

}


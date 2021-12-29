import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeleteResDto } from '@dto/all-respons/delete-res-dto';
import { Users } from '@models/users';
import { UsersService } from '@services/users/users.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  listUsers: Users[] = []
  selectedUsers: Users[] = []
  deleteResDto :DeleteResDto = new DeleteResDto()
  private unSubs?: Subscription;

  constructor(private usersService :UsersService, private router :Router) { }

  ngOnInit(): void {

    this.usersService.getAll()?.subscribe(result => this.listUsers = result)

  }

  onCreate() :void{

    this.router.navigateByUrl('/glexy/users/new')

  }

  onUpdate(id :string) :void{

    this.router.navigateByUrl(`/glexy/users/${id}`)

  }

  onDelete(id :string) :void{

    this.usersService.delete(id)?.subscribe(result =>{this.deleteResDto = result
    this.usersService.getAll()?.subscribe(result => this.listUsers = result)
    } )
  }

  ngOnDestroy(): void {
    this.unSubs?.unsubscribe()
  }

}


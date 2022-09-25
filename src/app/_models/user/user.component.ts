import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from '../../_service/user/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void{
    this.userService.getAll(1).subscribe(
      (resp: User[]) => {
        this.users = resp;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}

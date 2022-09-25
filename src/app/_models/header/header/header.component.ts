import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LoginService } from 'src/app/_service/login/login.service';
import { User } from '../../user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loginService:LoginService){ }
  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  private rolesNames: string[] = ['ADMIN', 'LEAD', 'USER'];
  isAdmin: boolean = false;
  isUser: boolean = false;
  isLead: boolean = false;
  title = "toolbar"

  ngOnInit() {
    this.loginService.observedUser.subscribe(
      {
        next: user => this.setTabs(user)
      }
    );
  }

  public setTabs(user: User):void{
      if(user != null){
        user.roles.forEach(str => {
          if(str == this.rolesNames[0]) this.isAdmin = true;
          if(str == this.rolesNames[1]) this.isLead = true;
          if(str == this.rolesNames[2]) this.isUser = true;
        })
      }
  }
}

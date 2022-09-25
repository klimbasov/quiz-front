import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_service/login/login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private authentocationService: LoginService,
    private router: Router) {

  }

  ngOnInit() {
    this.authentocationService.logOut();
    this.router.navigate(['login']);
  }

}

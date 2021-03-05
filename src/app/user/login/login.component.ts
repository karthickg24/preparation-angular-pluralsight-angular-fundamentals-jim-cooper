import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em {
      float: right;
      color: #E05C65;
      padding-left: 10px;
    }
  `]
})
export class LoginComponent implements OnInit {
  userName: string;
  passWord: string;
  mouseOverLogin: boolean;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login(value: any) {
    this.authService.loginUser(value.userName, value.passWord);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }

}

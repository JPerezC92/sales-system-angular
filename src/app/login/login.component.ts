import { Component, OnInit } from '@angular/core';
import { ApiauthService } from 'src/app/services/apiauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  constructor(private apiAuth: ApiauthService) {}

  ngOnInit(): void {}

  login() {
    this.apiAuth
      .login(this.email, this.password)
      .subscribe((r) => console.log(r));
  }
}

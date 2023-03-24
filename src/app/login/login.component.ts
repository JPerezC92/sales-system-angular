import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiauthService } from 'src/app/services/apiauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private _ApiauthService: ApiauthService, private router: Router) {
    if (!!_ApiauthService.getAuthCredentials()?.token) {
      router.navigate(['home']);
    }
  }

  ngOnInit(): void {}

  login() {
    this._ApiauthService.login(this.email, this.password).subscribe((r) => {
      if (r.sucess) {
        console.log('first');
        this.router.navigate(['home']);
      }
    });
  }
}

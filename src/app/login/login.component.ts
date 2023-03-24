import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiauthService } from 'src/app/services/apiauth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm = this._FormBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
  // public loginForm = new FormGroup({
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  // });

  constructor(
    private _ApiauthService: ApiauthService,
    private router: Router,
    private _FormBuilder: FormBuilder
  ) {
    if (!!_ApiauthService.getAuthCredentials()?.token) {
      router.navigate(['home']);
    }
  }

  ngOnInit(): void {}

  login() {
    const { email, password } = this.loginForm.value;
    if (!email || !password) return;

    this._ApiauthService.login({ email, password }).subscribe((r) => {
      if (r.sucess) {
        console.log('first');
        this.router.navigate(['home']);
      }
    });
  }
}

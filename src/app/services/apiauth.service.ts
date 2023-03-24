import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthCredentials } from 'src/app/models/AuthCredential';
import { LoginF } from 'src/app/models/LoginF';
import { Response } from 'src/app/models/response';

@Injectable({
  providedIn: 'root',
})
export class ApiauthService {
  url = 'https://localhost:7275/api/user/login';

  private authCredentialsSubject: BehaviorSubject<AuthCredentials | null>;

  useRes: Observable<AuthCredentials | null>;

  constructor(private _HttpClient: HttpClient) {
    const authCredentials = window.localStorage.getItem('authCredentials');
    this.authCredentialsSubject = new BehaviorSubject<AuthCredentials | null>(
      authCredentials ? JSON.parse(authCredentials) : null
    );

    this.useRes = this.authCredentialsSubject.asObservable();
  }

  getAuthCredentials(): AuthCredentials | null {
    return this.authCredentialsSubject.value;
  }

  login(login: Partial<LoginF>): Observable<Response<AuthCredentials>> {
    return this._HttpClient
      .post<Response<AuthCredentials>>(this.url, login, {
        headers: new HttpHeaders().append('Content-Type', 'application/json'),
      })
      .pipe(
        map((res) => {
          if (res.data) {
            const authCredentials: AuthCredentials = res.data;
            window.localStorage.setItem(
              'authCredentials',
              JSON.stringify(authCredentials)
            );

            this.authCredentialsSubject.next(authCredentials);
          }
          return res;
        })
      );
  }

  logout() {
    localStorage.removeItem('authCredentials');
    this.authCredentialsSubject.next(null);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthCredentials } from 'src/app/models/AuthCredential';
import { Response } from 'src/app/models/response';

@Injectable({
  providedIn: 'root',
})
export class ApiauthService {
  url = 'https://localhost:7275/api/user/login';

  private authCredentialsSubject: BehaviorSubject<AuthCredentials | null>;

  constructor(private _HttpClient: HttpClient) {
    const authCredentials = window.localStorage.getItem('authCredentials');
    this.authCredentialsSubject = new BehaviorSubject<AuthCredentials | null>(
      authCredentials ? JSON.parse(authCredentials) : null
    );
  }

  getAuthCredentials(): AuthCredentials | null {
    return this.authCredentialsSubject.value;
  }

  login(
    email: string,
    password: string
  ): Observable<Response<AuthCredentials>> {
    return this._HttpClient
      .post<Response<AuthCredentials>>(
        this.url,
        { email, password },
        {
          headers: new HttpHeaders().append('Content-Type', 'application/json'),
        }
      )
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

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthCredentials } from 'src/app/models/AuthCredential';
import { Response } from 'src/app/models/response';

@Injectable({
  providedIn: 'root',
})
export class ApiauthService {
  url = 'https://localhost:7275/api/user/login';
  constructor(private _HttpClient: HttpClient) {}

  login(
    email: string,
    password: string
  ): Observable<Response<AuthCredentials>> {
    return this._HttpClient.post<Response<AuthCredentials>>(
      this.url,
      { email, password },
      {
        headers: new HttpHeaders().append('Content-Type', 'application/json'),
      }
    );
  }
}

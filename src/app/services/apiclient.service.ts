import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientCreate } from 'src/app/models/ClientCreate';
import { ClientEndpoint } from 'src/app/models/ClientEndpoint';
import { Response } from 'src/app/models/response';

@Injectable({
  providedIn: 'root',
})
export class ApiclientService {
  url = 'https://localhost:7275/api/client';
  constructor(private _HttpClient: HttpClient) {}

  getClientList(): Observable<Response<ClientEndpoint[]>> {
    return this._HttpClient.get<Response<ClientEndpoint[]>>(this.url);
  }

  addClient(client: ClientCreate): Observable<Response<ClientEndpoint>> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    return this._HttpClient.post<Response<ClientEndpoint>>(this.url, client, {
      headers,
    });
  }
}

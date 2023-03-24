import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/models/response';
import { SaleCreate } from 'src/app/models/SaleCreate';

@Injectable({
  providedIn: 'root',
})
export class ApisaleService {
  url = 'https://localhost:7275/api/sale';

  constructor(private _HttpClient: HttpClient) {}

  add(Sale: SaleCreate): Observable<Response<null>> {
    return this._HttpClient.post<Response<null>>(this.url, Sale, {
      headers: new HttpHeaders()
        .append('Accept', 'application/json')
        .append('Content-Type', 'application/json'),
    });
  }
}

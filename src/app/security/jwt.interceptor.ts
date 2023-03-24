import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiauthService } from 'src/app/services/apiauth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private _ApiauthService: ApiauthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const credentials = this._ApiauthService.getAuthCredentials();
    if (!!credentials) {
      request = request.clone({
        setHeaders: { Authorization: 'Bearer ' + credentials.token },
      });
    }

    return next.handle(request);
  }
}

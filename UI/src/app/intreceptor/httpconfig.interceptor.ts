import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const currentUser = localStorage.getItem('SeesionUser');
    const isLoggedIn = currentUser;
    const isApiUrl = request.url.startsWith(environment.servicepythonUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        headers: request.headers
          .set('Authorization', 'Bearer ' + localStorage.getItem('SeesionUser'))
          .set('Content-Type', 'application/json')
          .set('Access-Control-Allow-Origin', '*'),
        responseType: 'json',
      });
    } else {
      request = request.clone({
        headers: request.headers
          .set('Accept', 'application/json')
          .set('Access-Control-Allow-Origin', '*'),
        responseType: 'json',
      });
    }

    return next.handle(request);
  }
}

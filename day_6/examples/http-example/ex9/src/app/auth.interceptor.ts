import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(request.url.includes('products')) {
      const newRequest = request.clone({
        headers: request.headers.append('Authorization', 'MY SECRET VALUE')
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}

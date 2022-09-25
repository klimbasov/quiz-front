import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHttpInterseptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const username = sessionStorage.getItem('username');
    const header = sessionStorage.getItem('basicauth');
    if (username && header) {
      req = req.clone({
        setHeaders: {
          Authorization: header
        }
      })
    }

    return next.handle(req);

  }
}

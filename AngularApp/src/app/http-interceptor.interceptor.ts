import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { HttpService } from './http.service';
@Injectable()
export class httpInterceptorInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Intercepted',req)
    const newReq = req.clone({url:'https://jsonplaceholder.typicode.com/'+req.url,
    setHeaders:{Autherization:'token'}})
    return next.handle(newReq).pipe(tap((suc)=>console.log('success ',suc),
    (err)=>console.log('error ',err)))
  }
}

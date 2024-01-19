import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any', //for component level service
})
export class HttpService {

  constructor(private http:HttpClient) { }
  getUser(){
    return this.http.get<any>('todos/2').subscribe((x)=>console.log(x))
  }
}

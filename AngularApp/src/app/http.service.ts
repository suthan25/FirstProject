import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  getUser(){
    return this.http.get<any>('todos/2').subscribe((x)=>console.log(x))
  }
}

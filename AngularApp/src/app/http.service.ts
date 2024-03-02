import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject, share } from 'rxjs';

@Injectable({
  providedIn: 'root', //for component level service
})
export class HttpService {
  private subject:Subject<any> = new ReplaySubject(1)
  constructor(private http:HttpClient) { }
  getUser(){
    return this.http.get<any>('todos/2').subscribe((x)=>console.log(x))
  }
  addMessage(message:string){
    this.subject.next(message)
  }
  message(){
    return this.subject.asObservable().subscribe((x)=>{'Message '+x})
  }
}

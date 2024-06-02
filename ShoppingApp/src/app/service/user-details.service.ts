import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  public userDetails:any[] = []
  public buyProd:any[] = []
  private currentUser = new BehaviorSubject<any>(null) 
  public isAuthorized:boolean = false
  constructor() { }
  user(data:any){
    this.currentUser.next(data)
  }
  get Data(){
    return this.currentUser.asObservable()
  }
}

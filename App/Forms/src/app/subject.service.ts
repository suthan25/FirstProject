import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable, ReplaySubject, Subject, connectable, filter, share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private subject$ = new ReplaySubject<any>()
  Observe$:any
  Obs$:Observable<FormGroup<any>> = this.subject$.asObservable()
  constructor() { }
  share(source:any){
    //this.Observe$ = source.pipe(share({connector:()=>this.subject$}))     //using share
    let multicasted = connectable(source,{connector:()=>this.subject$})     //using connectable
    multicasted.connect()
    return this.Observe$ = multicasted
  }
  shareForm(data:FormGroup){
     this.subject$.next(data)
  }
  getData(){
    return this.Observe$.asObservable()
  }
}

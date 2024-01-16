import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnDestroy,OnInit{
  Observe$:any
  data:any
  form:any[] = []
  constructor(private service:SubjectService){}
  ngOnDestroy(): void {
    this.Observe$.unsubscribe()
  }
  ngOnInit(): void {
   // this.Observe$ = this.service.Observe$.subscribe((x:any)=>console.log('user',x))
  //  this.Observe$ = this.service.Observe$.subscribe((x:any)=>console.log(x))
  //  this.service.Observe$.subscribe((x:any)=>this.data = x)
   this.Observe$ = this.service.Obs$.subscribe((x)=>this.form.push(x))
   console.log(this.form)
  }
}

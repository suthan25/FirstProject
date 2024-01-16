import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SubjectService } from '../subject.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit,OnDestroy{
  Form!: FormGroup;
  submit:boolean = false
  constructor(private service:SubjectService,private fb:FormBuilder){}
  Submit(){
    // this.service.share(this.Form.valueChanges).subscribe((x)=>console.log(x))
    // console.log(this.Form.valueChanges.subscribe(x=>x))
    this.service.shareForm(this.Form.value)
  }
  ngOnInit(): void {
    this.Form = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.min(6)]]
    })
   // this.Observe$ = this.service.Observe$.subscribe((x:any)=>console.log('child',x))
  }
  ngOnDestroy(): void {
    
  }
  log(){
    if (this.Form.valid) {
      this.submit = true
      console.log('submitted')
    }else{
      console.log('invalid')
    }
  }
}

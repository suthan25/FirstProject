import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { SubjectService } from '../subject.service';
import { interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy{
  form!: FormGroup;
  data:any[] = []
  constructor(private fb:FormBuilder,private service:SubjectService,private http:HttpClient){}
  ngOnInit(): void {
    this.form = this.fb.group({
      name:this.fb.array([
        this.fb.group({
          input:''
        })
      ])
    })
  }
  get Array(){
    return (this.form.get('name') as FormArray).controls
  }
  Add(){
    let arr = this.form.get('name') as FormArray
    arr.push(this.fb.group({
      input:''
    }))
  }
  delete(index:number){
    let arr = this.form.get('name') as FormArray
    if(arr.length > 1){
      (this.form.get('name') as FormArray).removeAt(index)
    }
    this.data = (this.form.get('name') as FormArray).value
    this.service.share(this.http.get<any>('https://api.spacexdata.com/v5/launches/latest',{responseType:'json'}))
  }
  save(){
    this.data = (this.form.get('name') as FormArray).value
  }
  ngOnDestroy(): void {
    
  }
}

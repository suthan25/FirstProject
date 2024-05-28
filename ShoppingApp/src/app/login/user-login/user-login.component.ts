import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDetailsService } from '../../service/user-details.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit{
  style:object = {
    'color':'red',
    'margin-left':'60px',
    'margin-top':'4px'
  }
  submitted:boolean = false
  form!: FormGroup;
  constructor(private fb:FormBuilder,private router:Router,public userData:UserDetailsService){}
  ngOnInit(): void {
    this.form = this.fb.group({
      username:['',[Validators.required,Validators.email,Validators.pattern('[a-zA-Z0-9]+@[a-z]+.[a-z]{1,3}')]],
      pass:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  submit(){
    if (this.form.valid) {
        this.submitted = true
      if (this.userData.userDetails.
        find((x)=>x.username === this.form.value.username && x.pass === this.form.value.pass)) {
          this.router.navigate(['/home'])        
      }
    } else {
      console.log('invalid',this.form.value)
    }
  }
}

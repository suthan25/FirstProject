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
  form!: FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private userData:UserDetailsService){}
  ngOnInit(): void {
    this.form = this.fb.group({
      username:['',[Validators.required,Validators.email,Validators.pattern('[a-zA-Z0-9]+@[a-z]+.[a-z]{1,3}')]],
      pass:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  submit(){
    if (this.form.valid && this.userData.userDetails.
      find((x)=>x.username === this.form.value.username && x.pass === this.form.value.pass)) {
      console.log(this.form.value)
      this.router.navigate(['/home'])
    } else {
      console.log('invalid',this.form.value)
    }
  }
}

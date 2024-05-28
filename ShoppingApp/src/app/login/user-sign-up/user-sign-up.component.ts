import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDetailsService } from '../../service/user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrl: './user-sign-up.component.css'
})
export class UserSignUpComponent implements OnInit{
  style:object = {
    'color':'red',
    'margin-left':'60px',
    'margin-top':'4px'
  }
  form!:FormGroup
  constructor(private fb:FormBuilder,private userData:UserDetailsService,
    private router:Router){}
  ngOnInit(): void {
    this.form = this.fb.group({
      name:['',[Validators.required]],
      username:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]+@[a-z]+.[a-z]{1,3}')]],
      pass:['',[Validators.required,Validators.minLength(6)]]
    })
  }
  submit():any{
    if (this.form.valid && !this.userData.userDetails.includes(this.form.value)) {
      this.form.value.cart = []
      this.userData.userDetails.push(this.form.value)
      console.log('registered',this.userData.userDetails)
      this.router.navigate(['/home'])
      return this.userData.userDetails
    } else {
      console.log('error')
    }
  }

}

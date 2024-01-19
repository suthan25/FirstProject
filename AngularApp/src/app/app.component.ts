import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApp';
  constructor(private router:Router){}
  parent(data:any){
    console.log('Parent in action')
    let obs$ = data.subscribe((x:any)=>console.log(x))
    setTimeout(()=>obs$.unsubscribe(),5000)
  }
  first(){
    this.router.navigate(['/first'],{queryParams:{params:'query'}})
  }
}

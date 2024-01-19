import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApp';
  parent(data:any){
    console.log('Parent in action')
    let obs$ = data.subscribe((x:any)=>console.log(x))
    setTimeout(()=>obs$.unsubscribe(),5000)
  }
}

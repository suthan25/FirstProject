import { HttpClient, HttpParams } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  input!: number;
  constructor(private http:HttpClient){}
  search(term:number){
    const options = term?{params:new HttpParams().set('userId',term)}:{}
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/',options).subscribe((x:any)=>console.log(x))
  }
}

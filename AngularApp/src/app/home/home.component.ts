import { HttpClient, HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  input!: number;
  constructor(private http:HttpClient,private service:HttpService){}
  ngOnInit(): void {
    this.service.getUser()
  }
  search(term:number){
    const options = term?{params:new HttpParams().set('userId',term)}:{}
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/',options).subscribe((x:any)=>console.log(x))
  }
}

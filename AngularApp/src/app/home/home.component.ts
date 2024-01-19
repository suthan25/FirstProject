import { HttpClient, HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpService } from '../http.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  @Input()dataFromParent:any
  @Output()childData = new EventEmitter()
  input!: number;
  constructor(private http:HttpClient,private service:HttpService){}
  ngOnInit(): void {
    this.service.getUser()
    console.log('Parent data',this.dataFromParent)
  }
  search(term:number){
    const options = term?{params:new HttpParams().set('userId',term)}:{} //used ternary operator
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/',options).subscribe((x:any)=>console.log(x))
  }
  child(){
    let child = this.childData.emit(interval(500))
    return child
  }
}

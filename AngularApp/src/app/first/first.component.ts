import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  check:string = ''
  constructor(private service:HttpService){}
  message(){
    this.service.addMessage(this.check)
  }
}

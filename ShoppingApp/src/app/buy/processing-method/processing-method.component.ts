import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserDetailsService } from '../../service/user-details.service';

@Component({
  selector: 'app-processing-method',
  templateUrl: './processing-method.component.html',
  styleUrl: './processing-method.component.css'
})
export class ProcessingMethodComponent implements OnDestroy,OnInit{
  public products:any
  constructor(private buy:UserDetailsService){}
  ngOnInit(): void {
    this.products = this.buy.buyProd
  }
  ngOnDestroy(): void {
    //this.buy.buyProd.pop()
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.css'
})
export class MobileComponent implements OnInit{
  products:any
  constructor(private prodService:ProductsService){}
  ngOnInit(): void {
  this.products = this.prodService.products.filter((x:any)=>x.type==='mobile')
  }
  addItem(i:number){
    this.prodService.selectProduct(i)
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent implements OnInit{
  products:any
  constructor(private prodService:ProductsService){}
  ngOnInit(): void {
    this.products = this.prodService.products.filter((x:any)=>x.type==='grocery')
  }
  addItem(i:number){
    this.prodService.selectProduct(i)
  }
}

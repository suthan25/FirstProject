import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrl: './fashion.component.css'
})
export class FashionComponent implements OnInit{
  products:any
  constructor(private prodService:ProductsService){}
  ngOnInit(): void {
    this.products = this.prodService.products.filter((x:any)=>x.type==='fashion')
  }
  addItem(i:number){
    this.prodService.selectProduct(i)
  }
}

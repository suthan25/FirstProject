import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-beauty-and-toys',
  templateUrl: './beauty-and-toys.component.html',
  styleUrl: './beauty-and-toys.component.css'
})
export class BeautyAndToysComponent implements OnInit{
  products:any
    constructor(private prodService:ProductsService){}
    ngOnInit(): void {
    this.products = this.prodService.products.filter((x:any)=>x.type==='beauty')
    }
    addItem(i:number){
      this.prodService.selectProduct(i)
    }
}

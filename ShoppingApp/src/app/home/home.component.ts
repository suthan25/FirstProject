import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  products:any
  constructor(private service:ProductsService){}
  ngOnInit(): void {
    this.products = this.service.products
  }
  addCart(i:any){
    this.service.selectProduct(i)
    console.log(this.service.Selected)
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.css'
})
export class CartItemsComponent implements OnInit{
  products:any
  constructor(private service:ProductsService){}
  ngOnInit(): void {
    this.products = this.service.Selected
  }
}

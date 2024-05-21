import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { UserDetailsService } from '../../service/user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.css'
})
export class CartItemsComponent implements OnInit{
  products:any
  constructor(private service:ProductsService,private buy:UserDetailsService,private route:Router){}
  ngOnInit(): void {
    this.products = this.service.Selected
  }
  removeItem(i:number){
    this.service.Selected.splice(i,1)
  }
  public buyProduct(i:any){
    this.buy.buyProd = this.service.products.filter((x)=>x===i)
    console.log(this.service.products.filter((x)=>x===i))
    this.route.navigate(['buy'])
  }
}

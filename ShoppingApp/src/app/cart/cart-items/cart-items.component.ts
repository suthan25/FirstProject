import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { UserDetailsService } from '../../service/user-details.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.css'
})
export class CartItemsComponent implements OnInit,OnDestroy{
  products:any
  user$!:Subscription
  currentUser:any
  data:any
  constructor(private service:ProductsService,private buy:UserDetailsService,private route:Router){
    this.user$ = this.buy.Data.subscribe((x)=>this.data = x)
  }
  ngOnInit(): void {
    this.currentUser = this.buy.userDetails.find((x)=>x.username === this.data.username && x.pass === this.data.pass)
     const cart = this.currentUser.cart as Array<any>
     this.products = cart
     console.log(cart)
    this.user$ = this.buy.Data.subscribe((x)=>console.log(x))
  }
  removeItem(i:number){
    if (this.products.indexOf(i)!== 1) {
      this.products.splice(i,1)
    }
  }
  public buyProduct(i:any){
    this.buy.buyProd = this.service.products.filter((x)=>x===i)
    console.log(this.service.products.filter((x)=>x===i))
    this.route.navigate(['buy'])
  }
  ngOnDestroy(): void {
    this.user$.unsubscribe()
  }
}

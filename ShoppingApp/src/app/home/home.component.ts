import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { UserDetailsService } from '../service/user-details.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy{
  products:any
  term!:string
  userData$!: Subscription;
  data:any
  currentUser:any
  constructor(private service:ProductsService , private buy:UserDetailsService,private route:Router){}
  ngOnInit(): void {
    this.products = this.service.products
    this.userData$ = this.buy.Data.subscribe((x)=>this.data = x)
  }
  addCart(i:any){
     this.currentUser = this.buy.userDetails.find((x)=>x.username === this.data.username && x.pass === this.data.pass)
     const cart = this.currentUser.cart as Array<any>
     if (cart.indexOf(i)==-1) {
      cart.push(i)
      console.log(this.currentUser)
     }
  }
  search(term:string){
   let filter = this.service.products.filter((x:any)=>x.name.toLowerCase() === term.toLowerCase()||
   x.type.toLowerCase() === term.toLowerCase())
    this.products = filter
    return this.products
  }
  public buyProduct(i:any){
    // if(this.buy.buyProd.length === 0){
    //   this.buy.buyProd.push(i)
    //   console.log(this.buy.buyProd)
    // }
    this.buy.buyProd = this.service.products.filter((x)=>x===i)
    console.log(this.service.products.filter((x)=>x===i))
    this.route.navigate(['buy'])
  }
  ngOnDestroy(): void {
    this.userData$.unsubscribe()
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Router } from '@angular/router';
import { UserDetailsService } from '../../service/user-details.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.css'
})
export class MobileComponent implements OnInit{
  products:any
  currentUser:any
  data:any
  userData$:any
  constructor(private prodService:ProductsService,private route:Router,
    private buy:UserDetailsService
  ){}
  ngOnInit(): void {
  this.products = this.prodService.products.filter((x:any)=>x.type==='mobile')
  this.userData$ = this.buy.Data.subscribe((x)=>this.data = x)
  }
  addItem(i:number){
    this.currentUser = this.buy.userDetails.find((x)=>x.username === this.data.username && x.pass === this.data.pass)
     const cart = this.currentUser.cart as Array<any>
     if (cart.indexOf(i)==-1) {
      cart.push(i)
      console.log(this.currentUser)
     }
  }
  public buyProduct(i:any){
    this.buy.buyProd = this.prodService.products.filter((x)=>x===i)
    console.log(this.prodService.products.filter((x)=>x===i))
    this.route.navigate(['buy'])
  }
}

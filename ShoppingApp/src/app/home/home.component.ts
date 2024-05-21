import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { UserDetailsService } from '../service/user-details.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  products:any
  term!:string
  constructor(private service:ProductsService , private buy:UserDetailsService,private route:Router){}
  ngOnInit(): void {
    this.products = this.service.products
  }
  addCart(i:any){
    this.service.selectProduct(i)
    console.log(this.service.Selected)
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
}

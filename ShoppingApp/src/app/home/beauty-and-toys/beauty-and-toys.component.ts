import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { Router } from '@angular/router';
import { UserDetailsService } from '../../service/user-details.service';

@Component({
  selector: 'app-beauty-and-toys',
  templateUrl: './beauty-and-toys.component.html',
  styleUrl: './beauty-and-toys.component.css'
})
export class BeautyAndToysComponent implements OnInit{
  products:any
    constructor(private prodService:ProductsService,private route:Router
      ,private buy:UserDetailsService){}
    ngOnInit(): void {
    this.products = this.prodService.products.filter((x:any)=>x.type==='beauty')
    }
    addItem(i:number){
      this.prodService.selectProduct(i)
    }
    public buyProduct(i:any){
      this.buy.buyProd = this.prodService.products.filter((x)=>x===i)
      console.log(this.prodService.products.filter((x)=>x===i))
      this.route.navigate(['buy'])
    }
}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent implements OnInit{
    products:any
    constructor(private prodService:ProductsService){}
    ngOnInit(): void {
    this.products = this.prodService.products.filter((x:any)=>x.type==='electronics')
    }
}

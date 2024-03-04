import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private Products:object[]=[{id:1,name:'Samsung S23 mobile',type:'mobile',rate:45000,img:'../assets/samsungUltra.jpg'},
  {id:2,name:'SurfExcel',type:'grocery',rate:65,img:'../assets/surfexcel.jpg'},{id:3,name:'jeans',type:'fashion',rate:600,img:'../assets/jeanspant.jpg'},
{id:4,name:'Panasonic LED TV',type:'electronics',rate:55000,img:'../assets/panasonicTV.jpg'},{id:5,name:'Sunscream',type:'beauty',rate:220,img:'../assets/sunscream.jpg'},
{id:6,name:'Apple IPhone 14 Pro',type:'mobile',rate:89000,img:'../assets/iphone14.jpg'},{id:7,name:'T-shirt',type:'fashion',rate:300,img:'../assets/shirt.jpg'},
{id:8,name:'Sony Headphone',type:'electronics',rate:1200,img:'../assets/sonyhead.jpg'},{id:9,name:'FaceWash',type:'beauty',rate:210,img:'../assets/facewash.jpg'},
{id:10,name:'Soap',type:'grocery',rate:20,img:'../assets/soap.jpg'}]
  public Selected:any = []
  constructor() { }
  get products(){
    return this.Products
  }
  selectProduct(prod:number){
    if(this.Selected.indexOf(prod) == -1){
      this.Selected.push(prod)
    }
    return this.Selected
  }
}

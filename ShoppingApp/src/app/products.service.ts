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
{id:10,name:'Soap',type:'grocery',rate:20,img:'../assets/soap.jpg'},{id:11,name:'sauce',type:'grocery',rate:190,img:'../assets/tomatoSauce.jpg'}
,{id:12,name:'salt',type:'grocery',rate:130,img:'../assets/salt.jpg'},{id:13,name:'fortune',type:'grocery',rate:250,img:'../assets/fortune.jpg'},
{id:14,name:'cornFlakes',type:'grocery',rate:170,img:'../assets/cornFlakes.jpg'},{id:15,name:'coffee',type:'grocery',
rate:150,img:'../assets/coffee.jpg'},{id:16,name:'coat',type:'fashion',rate:1200,img:'../assets/coat.jpg'},
{id:17,name:'handBag',type:'fashion',rate:560,img:'../assets/handBag.jpg'},{id:18,name:'hoodies',type:'fashion',
rate:750,img:'../assets/hoodies.jpg'},{id:19,name:'shoesBelt',type:'fashion',rate:400,img:'../assets/shoesBelt.jpg'},
{id:20,name:'pizzaMaker',type:'electronics',rate:2100,img:'../assets/pizzaMaker.jpg'},{id:21,name:'Mixi',type:'electronics',
rate:3000,img:'../assets/mixi.jpg'},{id:22,name:'smartClock',type:'electronics',rate:2300,img:'../assets/smartClock.jpg'},
{id:23,name:'waterPurifier',type:'electronics',rate:9500,img:'../assets/waterPurifier.jpg'},{id:24,name:'vivo phone',type:'mobile',rate:13000
,img:'../assets/vivo.jpg'},{id:25,name:'oppo phone',type:'mobile',rate:15000,img:'../assets/oppo.jpg'},{id:26,
name:'nokia phone',type:'mobile',rate:14000,img:'../assets/nokia.jpg'}]
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

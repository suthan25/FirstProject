import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart.component';
import { CartItemsComponent } from './cart-items/cart-items.component';

const routes: Routes = [{ path:'', component: CartComponent ,children:[
  {path:'',component:CartItemsComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }

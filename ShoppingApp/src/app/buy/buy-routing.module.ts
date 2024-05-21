import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyComponent } from './buy.component';
import { ProcessingMethodComponent } from './processing-method/processing-method.component';
import { CashOnDeliveryComponent } from './cash-on-delivery/cash-on-delivery.component';
import { OnlinePaymentComponent } from './online-payment/online-payment.component';

const routes: Routes = [{ path: '', component: BuyComponent ,children:[
  {path:'',component:ProcessingMethodComponent,pathMatch:'full'},
  {path:'cashOnDelivery',component:CashOnDeliveryComponent},
  {path:'payOnline',component:OnlinePaymentComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyRoutingModule { }

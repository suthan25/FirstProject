import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuyRoutingModule } from './buy-routing.module';
import { BuyComponent } from './buy.component';
import { OnlinePaymentComponent } from './online-payment/online-payment.component';
import { CashOnDeliveryComponent } from './cash-on-delivery/cash-on-delivery.component';
import { ProcessingMethodComponent } from './processing-method/processing-method.component';


@NgModule({
  declarations: [
    BuyComponent,
    OnlinePaymentComponent,
    CashOnDeliveryComponent,
    ProcessingMethodComponent
  ],
  imports: [
    CommonModule,
    BuyRoutingModule
  ]
})
export class BuyModule { }

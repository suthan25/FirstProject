import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GroceryComponent } from './grocery/grocery.component';
import { MobileComponent } from './mobile/mobile.component';
import { FashionComponent } from './fashion/fashion.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { BeautyAndToysComponent } from './beauty-and-toys/beauty-and-toys.component';


@NgModule({
  declarations: [
    HomeComponent,
    GroceryComponent,
    MobileComponent,
    FashionComponent,
    ElectronicsComponent,
    BeautyAndToysComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

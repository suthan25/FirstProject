import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BeautyAndToysComponent } from './beauty-and-toys/beauty-and-toys.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FashionComponent } from './fashion/fashion.component';
import { GroceryComponent } from './grocery/grocery.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [{ path: '', component: HomeComponent },{path:'beauty',component:BeautyAndToysComponent},{path:'electronics',component:ElectronicsComponent},
  {path:'fashion',component:FashionComponent},{path:'grocery',component:GroceryComponent},
  {path:'mobile',component:MobileComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

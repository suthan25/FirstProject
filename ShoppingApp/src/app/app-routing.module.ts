import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuardGuard } from './auth-guards/auth-guard.guard';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  canActivate:[authGuardGuard]
},
 { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
 { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
 { path: 'buy', loadChildren: () => import('./buy/buy.module').then(m => m.BuyModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from './products.service';
import { UserDetailsService } from './service/user-details.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsService,UserDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

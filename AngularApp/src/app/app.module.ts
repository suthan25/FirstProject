import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule, withJsonpSupport } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { httpInterceptorInterceptor } from './http-interceptor.interceptor';
import { FirstComponent } from './first/first.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:httpInterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

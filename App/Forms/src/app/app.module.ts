import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';
import { SubjectService } from './subject.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomDirective } from './custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    ChildComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [SubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }

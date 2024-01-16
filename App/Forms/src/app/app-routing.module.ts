import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [{path:'',component:HomeComponent,pathMatch:'full'},
{path:'user',component:UserComponent},{path:'child',component:ChildComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

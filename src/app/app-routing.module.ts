import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './comps/header/header.component';
import { AboutUsComponent } from './comps/about-us/about-us.component';
import { ContactComponent } from './comps/contact/contact.component';
import { AppComponent } from './app.component';
import { PictComponent } from './comps/pict/pict.component';


const routes: Routes = [
  {path:'',component:HeaderComponent,
  children:[
    {path:'about',component:AboutUsComponent},
    {path:'contact',component:ContactComponent},
    {path:'pict',component:PictComponent},


  ]


  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

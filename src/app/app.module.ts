import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './comps/header/header.component';
import{ AllImportsModule } from'./all-imports/all-imports.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AboutUsComponent } from './comps/about-us/about-us.component';
import { ContactComponent } from './comps/contact/contact.component';
import { PictComponent } from './comps/pict/pict.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutUsComponent,
    ContactComponent,
    PictComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AllImportsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

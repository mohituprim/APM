import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';


import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent }  from './home/welcome.component';
import {ProductModule} from './products/product.module';

@NgModule({
  //External module
  imports: [ BrowserModule,
             HttpModule,
             ProductModule,
             AppRoutingModule
             ],
  //Internal Module
  declarations: [ AppComponent, WelcomeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

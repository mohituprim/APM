import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent }  from './app.component';
import { WelcomeComponent }  from './home/welcome.component';
import {ProductModule} from './products/product.module';

@NgModule({
  //External module
  imports: [ BrowserModule, HttpModule,
             RouterModule.forRoot([
                { path: 'welcome', component: WelcomeComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
             ]),
             ProductModule
             ],
  //Internal Module
  declarations: [ AppComponent, WelcomeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

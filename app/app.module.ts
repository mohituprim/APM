import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
//required for two binding
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent }  from './app.component';
import { WelcomeComponent }  from './home/welcome.component';

import {ProductListComponent} from './products/product-list.component';
import {ProductDetailComponent} from './products/product-detail.component';
import {ProductFilterPipe} from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  //External module
  imports: [ BrowserModule, FormsModule, HttpModule,
             RouterModule.forRoot([
                { path: 'products', component: ProductListComponent },
                { path: 'product/:id', component: ProductDetailComponent },
                { path: 'welcome', component: WelcomeComponent },
                { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
             ])],
  //Internal Module
  declarations: [ AppComponent, ProductListComponent, ProductFilterPipe, StarComponent, WelcomeComponent, ProductDetailComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

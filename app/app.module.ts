import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//required for two binding
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {ProductFilterPipe} from './products/product-filter.pipe';

@NgModule({
  //External module
  imports: [ BrowserModule, FormsModule ],
  //Internal Module
  declarations: [ AppComponent, ProductListComponent, ProductFilterPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

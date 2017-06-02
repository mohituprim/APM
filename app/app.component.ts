import { Component } from '@angular/core';
import {ProductService} from "./products/product.service";

//Decorator to supply metadata
//class becomes component with component decorator
@Component({
    //Directive name used int HTML
    selector: 'pm-app',
    //View Layout
    template:`
    <div>
        <pm-products></pm-products>
    </div>`,
    providers:[ProductService]
})
//Class
export class AppComponent { }

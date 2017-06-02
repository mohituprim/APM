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
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['/welcome']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>`,
    providers:[ProductService]
})
//Class
export class AppComponent { }

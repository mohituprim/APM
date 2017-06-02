import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;

    constructor(private _route: ActivatedRoute,
                private _router: Router) {
    }

    ngOnInit(): void {
        //+ is shortcut to convert string to numeric
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;
    }

    //Activating a route with code
    onBack(): void {
        this._router.navigate(['/products']);
    }
}

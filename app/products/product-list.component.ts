import { Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import {ProductService } from './product.service'
@Component({
    selector: 'pm-products',
    //Can be used in place of relative path
    moduleId: module.id,
    //path is relatvie to index.html file
    //templateUrl: 'app/products/product-list.component.html',
    templateUrl: 'product-list.component.html',
    styleUrls:['product-list.component.css']
})
export class ProductListComponent implements OnInit{

    constructor(private _productService:ProductService){

    }
    pageTitle: string = 'Product List';
    imageWidth:number=50;
    imageMargin:number=2;
    showImage:boolean=false;
    listFilter:string='cart';
    products: IProduct[];

    toggleImage():void{
        this.showImage=!this.showImage;
    }

    ngOnInit():void{
        this.products = this._productService.getProducts();
    }

    onRatingClicked(message:string):void{
        this.pageTitle = 'Product List: ' + message;
    }
}

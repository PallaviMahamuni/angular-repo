import { Component } from '@angular/core';
import { IProduct } from "./product";
import { ProductService } from "./product.service";


@Component({
  templateUrl: './app/product/product-list.component.html'
})
export class ProductComponent{
    errorMessage: any;
    pageTitle: string = "Product List";
    filteredProduct: IProduct[];
    _listFilter: string = '';
    showImage: boolean;
    imageWidth: number = 50;
    imageMargin: number = 2;
    products: IProduct[];
    constructor(private _productService: ProductService){
        console.log("constructor called");
        this.filteredProduct=this.products;
        //products: IProduct[] =this._productService.getProduct();
    }
    ngOnInit(): void {
    this._productService.getProduct().subscribe(products => this.products= products,
error => this.errorMessage= <any>error);
    }
    
    toggleImage():void{
     this.showImage =! this.showImage;
        
    }
    //getter and setter of listFilter for 2 way binding
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value:string){
         this._listFilter=value;
         this.filteredProduct=this.performFilter(this._listFilter);
         console.log(value);
    }
    performFilter(filterBy: string): IProduct[] {
        console.log("filterBy "+filterBy);
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
              product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }	
}
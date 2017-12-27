import { Component } from '@angular/core';
import { IProduct } from "./product";

@Component({
  selector: 'pm-products',
  templateUrl: './app/product/product-list.component.html'
})
export class ProductComponent{
    pageTitle: string ="Product List";
    filteredProduct: IProduct[];
    _listFilter: string = '';
    showImage: boolean;
    imageWidth: number = 50;
    imageMargin: number = 2;
    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
        }
    ];
    constructor(){
         console.log("constructor called");
        this.filteredProduct=this.products;
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
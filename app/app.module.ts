import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/product.component";
import { ProductService } from "./product/product.service";
import { HttpClientModule} from '@angular/common/http';
import { StarComponent } from "./features/star.component";

@NgModule({
   imports:[ BrowserModule,FormsModule, HttpClientModule ],
   declarations : [ AppComponent, ProductComponent, StarComponent],
   bootstrap: [ AppComponent],
   providers:[ProductService]

})
export class AppModule{

}
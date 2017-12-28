import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { ProductComponent } from "./product/product.component";
import { ProductService } from "./product/product.service";
import { HttpClientModule} from '@angular/common/http';
import { StarComponent } from "./features/star.component";
import { RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product/product-detail.component';
import { WelcomeComponent } from "./home/welcome.component";

@NgModule({
   imports:[ BrowserModule,FormsModule, HttpClientModule, RouterModule.forRoot([
{ path: 'products', component: ProductComponent},
{ path: 'welcome', component: WelcomeComponent},
{ path: 'products/:id', component: ProductDetailComponent},
{ path: '', redirectTo: 'welcome', pathMatch: 'full' },
{ path: '**', redirectTo: 'welcome', pathMatch: 'full' }
], { useHash: true })],
   declarations : [ AppComponent, ProductComponent, StarComponent,WelcomeComponent,ProductDetailComponent],
   bootstrap: [ AppComponent],
   providers:[ProductService]

})
export class AppModule{

}
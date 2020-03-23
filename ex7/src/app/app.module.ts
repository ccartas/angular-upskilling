import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ProductListComponent } from './products/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

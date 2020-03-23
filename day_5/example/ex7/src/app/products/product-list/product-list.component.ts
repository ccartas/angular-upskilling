import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [];

  constructor(public appService: AppService,
              private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProductsAsObservable().subscribe(product => {
      this.products.push(product);
    })
  }

}

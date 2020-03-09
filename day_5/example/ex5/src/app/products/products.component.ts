import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { AppService } from '../app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @ViewChild('productList') productList: ProductListComponent;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.doSomethingWithObservable().subscribe(res => {
      console.log(res);
    })
  }

  ngAfterViewInit() {
    this.productList.products = this.appService.getProducts();
  }

}

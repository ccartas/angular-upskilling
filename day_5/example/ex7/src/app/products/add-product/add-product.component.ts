import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product = {
    productName: '',
    price: 0
  };

  constructor(private appService: AppService,
              private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  handleInputChange(event, propertyName) {
    this.product[propertyName] = event.target.value;
  }

  onProductAdded(event) {
    //this.appService.addProduct(this.product);
    this.productsService.addProduct(this.product);
    this.product = {
      productName: '',
      price: 0
    };
  }
}

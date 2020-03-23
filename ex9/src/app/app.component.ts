import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  filteredProducts: any[] = [];
  products: any[] = [
    {
      productName: 'Iphone 11 Pro', 
      price: 5000
    },
    {
      productName: 'Iphone XS',
      price: 4000
    },
    {
      productName: 'Samsung S10 Max',
      price: 4500
    },
    {
      productName: 'Samsung S20 Ultra',
      price: 5500
    }
  ];

  productName: FormControl = new FormControl();

  ngOnInit() {
    this.filteredProducts = this.products;
    this.productName.valueChanges.subscribe(value => {
      if(!value) {
        this.filteredProducts = this.products;
      } else {
        this.filteredProducts = this.products.filter(product => {
          //product.productName.toLowerCase().includes(value.toLowerCase())
          const values = Object.values(product).filter(productValue => productValue.toString().toLowerCase().includes(value.toLowerCase()));
          if(values.length) {
            return product;
          }
        });
      }
    })
  }
}

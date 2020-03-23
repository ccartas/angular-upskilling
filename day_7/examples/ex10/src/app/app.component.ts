import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productName: FormControl = new FormControl();
  /* 
  filteredProducts: any[] = [];
  products = [
    {
      productName: 'Iphone 11 Pro',
      price: 5000
    },
    {
      productName: 'Iphone XS',
      price: 4000
    },
    {
      productName: 'Samsung S20',
      price: 4500
    }
  ] */
  
  ngOnInit() {
    
    /* this.filteredProducts = this.products;
    this.productName.valueChanges.pipe(
        debounceTime(200)
      ).subscribe(value => {
      if(!value) {
        this.filteredProducts = this.products;
      } else {
        this.filteredProducts = this.products.filter(product => product.productName.toLowerCase().includes(value.toLowerCase()));
      }
    }); */
  } 
}

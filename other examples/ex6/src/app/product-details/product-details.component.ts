import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  @Input() selectedProduct = {
    productName: '',
    price: 0
  };
  constructor() { }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    console.log('Details destroyed');
  }
}

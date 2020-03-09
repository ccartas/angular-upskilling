import { Component, OnInit, AfterContentInit, AfterViewInit, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  

  products = [
    {
      productName: 'Iphone 11',
      price: 5000
    },
    {
      productName: 'Samsung Galaxy S20 Ultra',
      price: 4600
    }
  ];
  data = {
    selectedProduct: null
  };
  displayProductDetails: boolean = false;
  constructor() { }

  showProductDetails(event, product) {
    this.displayProductDetails = true;
    this.data.selectedProduct = product;
  }

  onModalClosed(value) {
    this.displayProductDetails = value;

  }
  ngOnInit(): void {
  
  }

  

}

import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  @Input() products: any[] = [];
  selectedProduct = {
    productName: '',
    price: 0
  };
  isModalDisplayed: boolean = false;
  @ViewChild('myView') myView: any;

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    console.log(this.myView);
  }
  displayProductDetails(event, product) {
    this.selectedProduct = {...product};
    this.isModalDisplayed = true;
  }

  onModalDialogClosed(value) {
    this.isModalDisplayed = value;
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product = {
    productName: '',
    category: 'SMARTPHONE',
    price: 0
  };

  @Output(/* 'onAdd' */) onProductAdded: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleInputChange(event, key) {
    this.product[key] = event.target.value;
  }

  addProduct(event) {
    this.onProductAdded.emit(this.product);
  }

}

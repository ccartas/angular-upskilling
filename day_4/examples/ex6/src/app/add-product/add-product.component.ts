import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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
  
  @Output() onProductAdded: EventEmitter<any> = new EventEmitter();

  constructor() { }

  
  ngOnInit(): void {
  }

  handleInputChange(event, propertyName) {
    this.product[propertyName] = event.target.value;
  }

  handleAddProduct(event) {
    this.onProductAdded.emit(this.product);
  }
}

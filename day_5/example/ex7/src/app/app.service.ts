import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  products = [];

  constructor() { }

  addProduct(product) {
    this.products.push(product);
  }
}

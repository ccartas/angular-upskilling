import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsSubject: Subject<any> = new Subject();

  constructor() { }

  addProduct(product) {
    this.productsSubject.next(product);
  }

  getProductsAsObservable() {
    return this.productsSubject.asObservable();
  }

}

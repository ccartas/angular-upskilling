import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private count: number = 0;
  private products = [];
  private Subs
  constructor() { }

  increaseCount() {
    this.count++;
  }
  decreaseCount() {
    this.count--;
  }
  addProduct(product) {
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }
  doSomethingWithObservable() {
    return Observable.create(observer => {
      //console.log('something')
      observer.next('Some random value');
      observer.next('Some other value');
      
      observer.complete();
      
    });
  }


}



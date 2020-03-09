import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './common/models/product';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getAllProducts() {
    /* const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'SECRET'
      })
    }; */
    return this.httpClient.get('http://localhost:8080/products');
  }

  addProduct(product) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'SECRET'
      }),
      responseType: 'json' as 'json'
    };
    return this.httpClient.post('http://localhost:8080/products', product, httpOptions);
  }

  getProductByIndex(index) {
    return this.httpClient.get<Product>(`http://localhost:8080/products/${index}`);
  }
  
}

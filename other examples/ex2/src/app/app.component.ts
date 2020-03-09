import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  productList: any[] = [];

  onProductAdded(product) {
    this.productList.push({...product}); //Object.assign({}, product);
  }
}

import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, DoCheck {

  constructor() { }

  ngOnInit(): void {
  }
  ngDoCheck() {
    console.log('DoCheck call for ProductList');
  }
}

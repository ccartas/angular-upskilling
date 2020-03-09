import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = [];
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    //this.products = this.appService.getProducts();
  }

}

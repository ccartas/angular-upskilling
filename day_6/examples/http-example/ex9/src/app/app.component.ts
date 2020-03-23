import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Product } from './common/models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  products: Product[] = [];
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.appService.getAllProducts().subscribe(response => {
      this.products = response;
    });
  }
}

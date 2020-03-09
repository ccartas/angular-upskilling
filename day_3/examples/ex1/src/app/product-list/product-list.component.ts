import { Component, OnInit, ViewChildren, Input, ElementRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnChanges {
  count = 0;

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log(simpleChanges);
  }




 products = [
    {
      productName: 'Iphone 11',
      imageSource: 'https://s12emagst.akamaized.net/products/25344/25343966/images/res_c6e84f4af154bb74f999a9f248f7c274_450x450_o3fq.jpg',
      price: 5000
    },
    {
      productName: 'Samsung S20 Ultra',
      imageSource: 'https://s12emagst.akamaized.net/products/25344/25343966/images/res_c6e84f4af154bb74f999a9f248f7c274_450x450_o3fq.jpg',
      price: 4000
    },
    {
      productName: 'Samsung S20 Ultra',
      imageSource: 'https://s12emagst.akamaized.net/products/25344/25343966/images/res_c6e84f4af154bb74f999a9f248f7c274_450x450_o3fq.jpg',
      price: 5000
    },
    {
      productName: 'Samsung S20 Ultra',
      imageSource: 'https://s12emagst.akamaized.net/products/25344/25343966/images/res_c6e84f4af154bb74f999a9f248f7c274_450x450_o3fq.jpg',
      price: 5000
    },{
      productName: 'Samsung S20 Ultra',
      imageSource: 'https://s12emagst.akamaized.net/products/25344/25343966/images/res_c6e84f4af154bb74f999a9f248f7c274_450x450_o3fq.jpg',
      isOnSale: true,
      newPrice: 3000,
      price: 4000
    }
  ]
  @Input('title') title: string;
  @Input() user = {
    title: '',
    data: ''
  }
  @ViewChildren('productItem') productItemList;

  
  /* set title(newValue: string) {
    console.log(newValue);
    this._title = newValue;
  }

  get title() {
    return this._title;
  } */
  changeTitle() {
    this.count++;
    this.user.title = 'ceva';
  }
  ngDoCheck() {
    console.log('do check')
  }

  constructor() { } 
  ngOnInit(): void {
    
  }

  ngAfterViewInit() {
    console.log(this.productItemList);
  }

}

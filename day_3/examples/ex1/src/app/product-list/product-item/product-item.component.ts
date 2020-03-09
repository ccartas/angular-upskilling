import { Component, OnInit, Input, ChangeDetectorRef, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  

  ngOnInit(): void {
    
  }

  @Input() product;
  constructor() {

    console.log('Called constructor.')
               }

  ngOnChanges() {
    console.log('Called onChanges.')
  }
}

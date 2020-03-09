import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent implements OnInit {
  @Input() selectedProduct: any = null;
  
  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cdRef.detach();
  }

  ngDoCheck() {
    this.cdRef.detectChanges();
  }

}

import { Component, OnInit, OnChanges, Input, SimpleChanges, DoCheck, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit, OnChanges, DoCheck {

  private _componentData: any;

  constructor(private cdRef: ChangeDetectorRef) { 
    console.log('Constructor called for Products');
    //console.log(this.componentTitle);
  }

  ngOnInit(): void {
    console.log('OnInit called for Products');
    //console.log(this.componentTitle);
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log('OnChanges called for Products');
    console.log(simpleChanges);
    /* if(!(simpleChanges['componentTitle'].currentValue.length > 3)) {
      this.componentTitle = 'Title not properly set';
    }  */
  }

  ngDoCheck() {
    console.log('DoCheck called for Products Component');
    console.log(this._componentData);
    this.cdRef.markForCheck();
  }

  @Input('title')
  set componentData(newValue) {
    this._componentData = newValue;
  }

  get componentData() {
    return this._componentData;
  }

}

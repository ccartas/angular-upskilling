import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Observable, Subscription, Subject } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductListComponent implements OnDestroy {

  subscribe$: Subscription;
  unsubscribe$: Subject<any> = new Subject();

  ngOnDestroy() {
    this.subscribe$.unsubscribe();
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


  @Input() data;
  @Input() primitive;
  value: string = ''
  
  

  ngOnInit(): void {
    this.cdRef.detach();
  }
  handleChangeValue(event) {
    this.value = event.target.value;
  }

  constructor(private cdRef: ChangeDetectorRef) { }

  ngDoCheck() {
    console.log('Do check on ProductList')
    console.log(this.data);
    console.log(this.value);
    //his.cdRef.markForCheck();
    //this.cdRef.checkNoChanges();
  }


}

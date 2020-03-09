import { Component, OnInit, Output, EventEmitter, ViewChild, ContentChild, ElementRef, AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, AfterViewInit, AfterViewChecked } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';

@Component({
  selector: 'app-centered-modal',
  templateUrl: './centered-modal.component.html',
  styleUrls: ['./centered-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CenteredModalComponent implements AfterViewInit, AfterViewChecked {
  
  
  @ViewChild('myView') myView: ElementRef;

  @ContentChild(ProductDetailsComponent) myContent: ProductDetailsComponent;
  ngAfterContentChecked() {
    console.log('content checked');
    console.log(this.myContent);
  }

  @Output() modalClosed: EventEmitter<any> = new EventEmitter();
  


  
  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  closeModal(event) {
    this.modalClosed.emit(false);
  }

  ngAfterContentInit() {
    console.log(this.myContent);
    console.log(this.myView);
  }

  ngAfterViewInit() {
    console.log(this.myContent);
    console.log(this.myView);
  }

  ngAfterViewChecked() {
    console.log(this.myView);
  }

  

  ngOnDestroy() {
    console.log('destroy');
  }
}

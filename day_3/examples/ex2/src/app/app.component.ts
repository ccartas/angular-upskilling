import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  data = {
    value: ''
  }; 
  primitive;

  constructor(private cdRef: ChangeDetectorRef) {}
  ngDoCheck() {
    console.log('Do check in AppComponent');
    //this.cdRef.markForCheck();
  }
  ngOnInit() {
    
  }
  handleDataChange(event) {
    this.data.value = event.target.value;
    this.primitive = 'ceva';
   
  }
}

import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  data: any = {
    title: ''
  };

  constructor() {
    console.log('Constructor called for AppComponent');
  }

  ngOnInit() {
    console.log('OnInit called for AppComponent');
  }
  ngDoCheck() {
    console.log('DoCheck called for AppComponent');
  }
  handleInputChange(event) {
    this.data = event.target.value;
  }
}

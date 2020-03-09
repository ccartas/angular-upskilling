import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  path: string = '';
  
  constructor() { }

  ngOnInit(): void {

  }

  handleNavigationClick(event, pathValue) {
    if(this.path === pathValue) {
      this.path = '';
    } else {
      this.path = pathValue;
    }
  }
  applySelectedElementStyle(pathValue) {
    const style = {};
    if(this.path === pathValue) {
      style['color'] = 'red';
    } else {
      style['color'] = '#000';
    }
    return style;
  }
}

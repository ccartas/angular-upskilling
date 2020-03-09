import { Component, ViewChildren, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @ViewChild('myValue') myInput: ElementRef;
  title = '';
  userData = {
    title: '',
    data: ''
  }
  ngOnInit() {

  }

  onInputChange(event) {
    this.title = event.target.value;
    this.userData.title = this.title;
  }
}

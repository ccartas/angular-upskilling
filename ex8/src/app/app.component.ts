import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  test = '';

  onModelChange(event, test) {
    console.log(test.valid);
  }
}

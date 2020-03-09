import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ex7';

  constructor(private appService: AppService) {}

  getProducts() {
    this.appService.getAllProducts().subscribe(res => {
      
    });
  }

  getProductByIndex() {
    this.appService.getProductByIndex(0).subscribe(response => {
      console.log(response.category);
    }, error => {
      console.log(error);
    })
  }


}

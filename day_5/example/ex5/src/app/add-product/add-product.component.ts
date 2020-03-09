import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { NotificationService } from '../notification/notification.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private appService: AppService,
              private notificationService: NotificationService) { }

  ngOnInit(): void {

  }
  
  addProduct(event) {
    this.appService.addProduct({
      productName: "Iphone",
      price: 5000
    })
    this.notificationService.showNotification('Success', 'Product Added successfully', 'SUCCESS');
  }
}

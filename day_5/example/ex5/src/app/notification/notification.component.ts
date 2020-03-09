import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  notificationTitle: string = '';
  notificationBody: string = '';
  notificationType: string = '';
  displayNotification: boolean = false;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getNotificationAsObservable().subscribe(notificationData => {
      this.displayNotification = notificationData.display;
      this.notificationBody = notificationData.body;
      this.notificationTitle = notificationData.title;
    })
  }

  dismissNotification() {
    this.notificationService.hideNotification();
  }

  applyNotificationStyle() {
    const style = {};
    if(this.displayNotification) {
      style['right'] = '10px';
    } else {
      style['right'] = '-300px';
    }
    return style;
  }
}

import { Component, OnInit } from '@angular/core';
import { NotificationMessage } from './notification-message';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notificationData: NotificationMessage = {
    title: '',
    body: '',
    type: '',
    display: false
  };

  constructor(private notificationService: NotificationService) { 
    this.notificationService.getNotificationData().subscribe(notificationMessage => {
      this.notificationData = { ...notificationMessage };
    });
  }

  ngOnInit(): void {
  }

  applyNotificationStyle() {
    const style = {};
    if(this.notificationData.display) {
      style['right'] = '10px';
    } else {
      style['right'] = '-300px';
    }
    switch(this.notificationData.type) {
      case 'ERR':
        style['background'] = '#F8B7BD';
        break;
      case 'WARN':
        style['background'] = '#FFE399';
        break;
      case 'SUCC':
        style['background'] = '#B7D8B7';
        break;
    }
    return style;
  }

  dismissNotification(event) {
    this.notificationService.hideNotification();
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationDataSource: Subject<any> = new Subject();

  constructor() { }

  getNotificationAsObservable() {
    return this.notificationDataSource.asObservable();
  }

  showNotification(title, body, type) {
   this.hideNotification();
    setTimeout(() => {
      this.notificationDataSource.next({
        title,
        body,
        type,
        display: true
      });
    }, 300);
    
  }

  hideNotification() {
    this.notificationDataSource.next({
      title: '',
      body: '',
      type: '',
      display: false
    })
  }
}

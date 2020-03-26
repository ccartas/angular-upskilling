import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NotificationMessage } from './notification-message';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationSubject: Subject<NotificationMessage> = new Subject();

  constructor() { }

  showNotification(notificationMessage: NotificationMessage) {
    this.hideNotification();
    setTimeout(() => {
      this.notificationSubject.next(notificationMessage);
    }, 300);
  }

  hideNotification() {
    this.notificationSubject.next({
      title: '',
      body: '',
      type: '',
      display: false
    });
  }

  getNotificationData() {
    return this.notificationSubject.asObservable();
  }
}

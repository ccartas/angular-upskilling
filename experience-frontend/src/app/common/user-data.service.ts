import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserData } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private userDataSubject: BehaviorSubject<UserData> = new BehaviorSubject(null);

  constructor() { }

  storeUserData(userData: UserData) {
    this.userDataSubject.next(userData);
  }

  getUserData() {
    return this.userDataSubject.asObservable();
  }
}

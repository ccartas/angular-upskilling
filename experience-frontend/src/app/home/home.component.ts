import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../common/user-data.service';
import { LocalStorageService } from '../common/local-storage.service';
import { UserData } from '../common/models/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayUserModalDialog: boolean = false;

  constructor(private localStorageService: LocalStorageService,
              private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.localStorageService.getData('userData').then((userData: UserData) => {
      this.userDataService.storeUserData(userData);
    });
  }

  toggleUserModalDialog(display: boolean) {
    this.displayUserModalDialog = display;
  }

}

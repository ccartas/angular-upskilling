import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavigationEntry, UserData } from 'src/app/common/models/models';
import { Router } from '@angular/router';
import { UserDataService } from 'src/app/common/user-data.service';
import { LocalStorageService } from 'src/app/common/local-storage.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Output() onLoginPressed: EventEmitter<any> = new EventEmitter();
  userData: UserData = null;

  navigationConfiguration: NavigationEntry[] = [
    {
      label: 'Home',
      navigationPath: 'landing',
      selected: true
    },
    {
      label: 'About',
      navigationPath: 'about',
      selected: false
    }
  ]
  constructor(private router: Router,
              private userDataService: UserDataService,
              private localStorageService: LocalStorageService) {
  this.userDataService.getUserData().subscribe(userData => {
    console.log(userData);
    this.userData = userData ? {...userData} : null;
  })
              }

  ngOnInit(): void {
  }

  applyStyleForSelectedNavItem(isSelected) {
    const style = {};
    if(isSelected) {
      style['text-decoration'] = 'underline';
    }
    return style;
  }

  navigateTo(event, navigationPath, entryIndex) {
    this.navigationConfiguration.forEach(navigationEntry => navigationEntry.selected = false);
    this.navigationConfiguration[entryIndex].selected = true;
    this.router.navigate(['/home', {outlets: {home_outlet: navigationPath}}]);
  }

  displayUserModalDialog(event) {
    this.onLoginPressed.emit(true);
  }

  async logoutUser(event) {
    try {
      await this.localStorageService.clearStore();
      this.userDataService.storeUserData(null);
      this.router.navigate(['/home', {outlets: {home_outlet: 'landing'}}]);
    } catch(err) {
      console.log(err);
    }
  }

}

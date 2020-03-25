import { Component, OnInit } from '@angular/core';
import { NavigationEntry } from 'src/app/common/models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
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
  constructor(private router: Router) { }

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

}

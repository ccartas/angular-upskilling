import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { AboutComponent } from './home/about/about.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'landing',
        component: LandingPageComponent,
        outlet: 'home_outlet'
      },
      {
        path: 'about',
        component: AboutComponent,
        outlet: 'home_outlet'
      },
      {
        path: '',
        redirectTo: '/home/(home_outlet:landing)',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

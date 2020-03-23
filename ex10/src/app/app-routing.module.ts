import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingComponent } from './home/landing/landing.component';
import { ContactComponent } from './home/contact/contact.component';
import { AboutComponent } from './home/about/about.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'landing',
                component: LandingComponent,
                outlet: 'home_outlet'
            },
            {
                path: 'contact',
                component: ContactComponent,
                outlet: 'home_outlet'
            },
            {
                path: 'about',
                component: AboutComponent,
                outlet: 'home_outlet'
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home/landing'
            }
        ]
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
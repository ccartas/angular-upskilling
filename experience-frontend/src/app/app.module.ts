import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { LandingPageComponent } from './home/landing-page/landing-page.component';
import { AboutComponent } from './home/about/about.component';
import { ModalComponent } from './common/modal/modal.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './common/notification/notification.component';
import { HttpClientModule } from '@angular/common/http';
import { AddExperienceComponent } from './home/add-experience/add-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    LandingPageComponent,
    AboutComponent,
    ModalComponent,
    LoginComponent,
    RegisterComponent,
    NotificationComponent,
    AddExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

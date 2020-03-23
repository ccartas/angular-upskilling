import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './common/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ForbiddenInputDirective } from './forbidden-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    ForbiddenInputDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

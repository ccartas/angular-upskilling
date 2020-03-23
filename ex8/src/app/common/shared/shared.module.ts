import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    HttpClientModule,
    FormsModule
  ]
})  
export class SharedModule { }

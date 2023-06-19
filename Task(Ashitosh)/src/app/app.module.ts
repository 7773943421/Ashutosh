import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { CarComponent } from './car/car.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFrom2Component } from './reactive-from2/reactive-from2.component';
import { Test1Component } from './All_Services/test1/test1.component';
//import { InputeComponent } from './inpute/inpute.component';
//import { HooksComponent } from './hooks/hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ReactiveFrom2Component,
    Test1Component,
    //InputeComponent,
   // HooksComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

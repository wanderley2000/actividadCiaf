import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './general/home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './general/general.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GeneralComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
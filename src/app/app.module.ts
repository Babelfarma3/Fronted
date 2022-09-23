import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Frame1Component } from './components/frame1/frame1.component';
import { Frame4Component } from './components/frame4/frame4.component';
import { Frame5Component } from './components/frame5/frame5.component';
import { Frame6Component } from './components/frame6/frame6.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Frame1Component,
    Frame4Component,
    Frame5Component,
    Frame6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

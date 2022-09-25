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
import { Frame8Component } from './components/frame8/frame8.component';
import { Frame3Component } from './components/frame3/frame3.component';
import { NavbarcompradorComponent } from './components/navbarcomprador/navbarcomprador.component';
import { Frame11Component } from './components/frame11/frame11.component';
import { Frame25Component } from './components/frame25/frame25.component';
import { Frame13Component } from './components/frame13/frame13.component';
import { Frame14Component } from './components/frame14/frame14.component';
import { NavbarfarmaciaComponent } from './components/navbarfarmacia/navbarfarmacia.component';
import { Frame18Component } from './components/frame18/frame18.component';
import { Frame26Component } from './components/frame26/frame26.component';
import { Frame7Component } from './components/frame7/frame7.component';
import { Frame22Component } from './components/frame22/frame22.component';
import { Frame2Component } from './components/frame2/frame2.component';
import { Frame15Component } from './components/frame15/frame15.component';
import { Frame17Component } from './components/frame17/frame17.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Frame1Component,
    Frame4Component,
    Frame5Component,
    Frame6Component,
    Frame8Component,
    Frame3Component,
    NavbarcompradorComponent,
    Frame11Component,
    Frame25Component,
    Frame13Component,

    Frame14Component,
      NavbarfarmaciaComponent,
      Frame18Component,
      Frame26Component,
      Frame7Component,
      Frame22Component,
      Frame2Component,
      Frame15Component,
      Frame17Component,

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

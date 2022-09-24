import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [],
  imports: [
    CommonModule, MatToolbarModule,MatButtonModule, MatCardModule, MatChipsModule
    , MatSelectModule
  ],
  exports:[MatToolbarModule, MatButtonModule, MatCardModule, MatChipsModule
  , MatSelectModule]
})
export class AngularMaterialModule { }

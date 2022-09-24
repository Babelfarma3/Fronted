import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule, 
    MatChipsModule, 
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
  ],
  exports:[
    MatToolbarModule, 
    MatButtonModule, 
    MatCardModule, 
    MatChipsModule, 
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
]
})
export class AngularMaterialModule { }

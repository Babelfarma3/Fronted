import { Frame6Component } from './components/frame6/frame6.component';
import { Frame5Component } from './components/frame5/frame5.component';
import { Frame4Component } from './components/frame4/frame4.component';
import { Frame1Component } from './components/frame1/frame1.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: Frame1Component},
  {path: 'registrotipo', component: Frame4Component},
  {path: 'registroComprador', component: Frame5Component},
  {path: 'registroDueñoFarmacia', component: Frame6Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

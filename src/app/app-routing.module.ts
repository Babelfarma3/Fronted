import { Frame13Component } from './components/frame13/frame13.component';
import { Frame25Component } from './components/frame25/frame25.component';
import { Frame11Component } from './components/frame11/frame11.component';
import { Frame3Component } from './components/frame3/frame3.component';
import { Frame8Component } from './components/frame8/frame8.component';
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
  {path: 'registroDueñoFarmacia', component: Frame6Component},
  {path: 'Login', component: Frame8Component},
  {path: 'Contacatanos', component: Frame3Component},
  {path: 'Inicio', component: Frame11Component},
  {path: 'ListaDeProductos', component: Frame25Component},
  {path: 'Busqueda', component: Frame13Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

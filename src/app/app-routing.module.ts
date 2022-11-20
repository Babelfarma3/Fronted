import { ReporteFarmaciaVentasComponent } from './components/reporte-farmacia-ventas/reporte-farmacia-ventas.component';
import { ReporteMontoPorMesComponent } from './components/reporte-monto-por-mes/reporte-monto-por-mes.component';
import { MostrarventasComponent } from './components/mostrarventas/mostrarventas.component';
import { ReportePorCategoriaComponent } from './components/reporte-por-categoria/reporte-por-categoria.component';
import { MostrarfarmaciasComponent } from './components/mostrarfarmacias/mostrarfarmacias.component';
import { BoletaComponent } from './components/boleta/boleta.component';
import { FarmaciaventasComponent } from './components/farmaciaventas/farmaciaventas.component';
import { ClientesfarmciaComponent } from './components/clientesfarmcia/clientesfarmcia.component';
import { ActualizarfarmaciaComponent } from './components/actualizarfarmacia/actualizarfarmacia.component';
import { ActualizarclienteComponent } from './components/actualizarcliente/actualizarcliente.component';
import { Frame19Component } from './components/frame19/frame19.component';
import { Frame9Component } from './components/frame9/frame9.component';
import { Frame17Component } from './components/frame17/frame17.component';
import { Frame15Component } from './components/frame15/frame15.component';
import { Frame2Component } from './components/frame2/frame2.component';
import { Frame22Component } from './components/frame22/frame22.component';
import { Frame7Component } from './components/frame7/frame7.component';
import { Frame26Component } from './components/frame26/frame26.component';
import { Frame18Component } from './components/frame18/frame18.component';
import { Frame14Component } from './components/frame14/frame14.component';
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
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: Frame1Component},
  {path: 'registrotipo', component: Frame4Component},
  {path: 'Informacion', component:Frame2Component},
  {path: 'registroComprador', component: Frame5Component},
  {path: 'registroDueñoFarmacia', component: Frame6Component},
  {path: 'Login', component: Frame8Component}, 
  {path: 'Contacatanos', component: Frame3Component},
  {path: 'Comprador/:id', component: Frame11Component}, 
  {path: 'ListaDeProductos/:id', component: Frame25Component}, 
  {path: 'Busqueda/:id', component: Frame13Component}, 
  {path: 'Carrito', component: Frame14Component},
  {path: 'RegistarProducto/:id', component:Frame18Component},
  {path: 'ActualizarProducto/:id/:idFarmacia', component:Frame26Component}, 
  {path: 'Farmacia/:id', component: Frame7Component},
  {path: 'MedicamentosRecomendados/:id', component: Frame22Component},
  {path: 'CarritoCompras/:id', component: Frame15Component},
  {path: 'RutaFarmacia', component: Frame17Component}, 
  {path: 'RecuperaCuenta', component: Frame9Component},
  {path: 'CompraFinalizada', component: Frame19Component},
  {path: 'ActualizarDatosCliente/:id', component: ActualizarclienteComponent},
  {path: 'ActualizarDatosFarmacia', component: ActualizarfarmaciaComponent},
  {path: 'ClientesDeFarmacia', component: ClientesfarmciaComponent},
  {path: 'VentasDeFarmacia', component: FarmaciaventasComponent},
  {path: 'boleta', component: BoletaComponent},
  {path:'MostrarFarmacias/:id', component: MostrarfarmaciasComponent},
  {path:'ReporteCategoria/:id', component: ReportePorCategoriaComponent},
  {path:'ListaDeVentas/:id', component: MostrarventasComponent},
  {path:'ReporteMontoPorMes/:id', component: ReporteMontoPorMesComponent},
  {path:'ReporteFarmaciaVentas/:id', component: ReporteFarmaciaVentasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

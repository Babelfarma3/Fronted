import { ReporteProductosVendidosComponent } from './components/reporte-productos-vendidos/reporte-productos-vendidos.component';
import { ReporteProductoComprasComponent } from './components/reporte-producto-compras/reporte-producto-compras.component';
import { ReporteFarmaciaVentasComponent } from './components/reporte-farmacia-ventas/reporte-farmacia-ventas.component';
import { ReporteMontoPorMesComponent } from './components/reporte-monto-por-mes/reporte-monto-por-mes.component';
import { MostrarVentasComponent } from './components/mostrar-ventas/mostrar-ventas.component';
import { ReportePorCategoriaComponent } from './components/reporte-por-categoria/reporte-por-categoria.component';
import { MostrarFarmaciasComponent } from './components/mostrar-farmacias/mostrar-farmacias.component';
import { ActualizarFarmaciaComponent } from './components/actualizar-farmacia/actualizar-farmacia.component';
import { ActualizarClienteComponent } from './components/actualizar-cliente/actualizar-cliente.component';
import { CompraFinalizadaComponent } from './components/compra-finalizada/compra-finalizada.component';
import { RecuperarCuentaComponent } from './components/recuperar-cuenta/recuperar-cuenta.component';
import { RutaFarmaciaComponent } from './components/ruta-farmacia/ruta-farmacia.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { MedicamentosRecomendadosComponent } from './components/medicamentos-recomendados/medicamentos-recomendados.component';
import { FarmaciaComponent } from './components/farmacia/farmacia.component';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { RegistrarProductoComponent } from './components/registrar-producto/registrar-producto.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { CompradorComponent } from './components/comprador/comprador.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroFarmaciaComponent } from './components/registro-farmacia/registro-farmacia.component';
import { RegistroCompradorComponent } from './components/registro-comprador/registro-comprador.component';
import { RegistroTipoComponent } from './components/registro-tipo/registro-tipo.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'registrotipo', component: RegistroTipoComponent},
  {path: 'Informacion', component:InformacionComponent},
  {path: 'registroComprador', component: RegistroCompradorComponent},
  {path: 'registroDueñoFarmacia', component: RegistroFarmaciaComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Contacatanos', component: ContactanosComponent},
  {path: 'Comprador/:id', component: CompradorComponent},
  {path: 'ListaDeProductos/:id', component: ListaProductosComponent},
  {path: 'Busqueda/:id', component: BusquedaComponent},
  {path: 'RegistarProducto/:id', component:RegistrarProductoComponent},
  {path: 'ActualizarProducto/:id/:idFarmacia', component:ActualizarProductoComponent},
  {path: 'Farmacia/:id', component: FarmaciaComponent},
  {path: 'MedicamentosRecomendados/:id', component: MedicamentosRecomendadosComponent},
  {path: 'CarritoCompras/:id', component: CarritoComprasComponent},
  {path: 'RutaFarmacia', component: RutaFarmaciaComponent},
  {path: 'RecuperaCuenta', component: RecuperarCuentaComponent},
  {path: 'CompraFinalizada', component: CompraFinalizadaComponent},
  {path: 'ActualizarDatosCliente/:id', component: ActualizarClienteComponent},
  {path: 'ActualizarDatosFarmacia/:id', component: ActualizarFarmaciaComponent},
  {path:'MostrarFarmacias/:id', component: MostrarFarmaciasComponent},
  {path:'ReporteCategoria/:id', component: ReportePorCategoriaComponent},
  {path:'ListaDeVentas/:id', component: MostrarVentasComponent},
  {path:'ReporteMontoPorMes/:id', component: ReporteMontoPorMesComponent},
  {path:'ReporteFarmaciaVentas/:id', component: ReporteFarmaciaVentasComponent},
  {path:'ReporteProductoCompras/:id', component: ReporteProductoComprasComponent},
  {path:'ReporteProductosVendidos/:id', component: ReporteProductosVendidosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

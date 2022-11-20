import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegistroTipoComponent } from './components/registro-tipo/registro-tipo.component';
import { RegistroCompradorComponent } from './components/registro-comprador/registro-comprador.component';
import { RegistroFarmaciaComponent } from './components/registro-farmacia/registro-farmacia.component';
import { LoginComponent } from './components/login/login.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { NavbarCompradorComponent } from './components/navbar-comprador/navbar-comprador.component';
import { CompradorComponent } from './components/comprador/comprador.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { NavbarFarmaciaComponent } from './components/navbar-farmacia/navbar-farmacia.component';
import { RegistrarProductoComponent } from './components/registrar-producto/registrar-producto.component';
import { ActualizarProductoComponent } from './components/actualizar-producto/actualizar-producto.component';
import { FarmaciaComponent } from './components/farmacia/farmacia.component';
import { MedicamentosRecomendadosComponent } from './components/medicamentos-recomendados/medicamentos-recomendados.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { CarritoComprasComponent } from './components/carrito-compras/carrito-compras.component';
import { RutaFarmaciaComponent } from './components/ruta-farmacia/ruta-farmacia.component';
import { RecuperarCuentaComponent } from './components/recuperar-cuenta/recuperar-cuenta.component';
import { CompraFinalizadaComponent } from './components/compra-finalizada/compra-finalizada.component';
import { ActualizarClienteComponent } from './components/actualizar-cliente/actualizar-cliente.component';
import { ActualizarFarmaciaComponent } from './components/actualizar-farmacia/actualizar-farmacia.component';
import { MostrarFarmaciasComponent } from './components/mostrar-farmacias/mostrar-farmacias.component';
import { ReportePorCategoriaComponent } from './components/reporte-por-categoria/reporte-por-categoria.component';
import { MostrarVentasComponent } from './components/mostrar-ventas/mostrar-ventas.component';
import { ReporteMontoPorMesComponent } from './components/reporte-monto-por-mes/reporte-monto-por-mes.component';
import { ReporteFarmaciaVentasComponent } from './components/reporte-farmacia-ventas/reporte-farmacia-ventas.component';
import { ReporteProductoComprasComponent } from './components/reporte-producto-compras/reporte-producto-compras.component';
import { ReporteProductosVendidosComponent } from './components/reporte-productos-vendidos/reporte-productos-vendidos.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegistroTipoComponent,
    RegistroCompradorComponent,
    RegistroFarmaciaComponent,
    LoginComponent,
    ContactanosComponent,
    NavbarCompradorComponent,
    CompradorComponent,
    ListaProductosComponent,
    BusquedaComponent,
    NavbarFarmaciaComponent,
    RegistrarProductoComponent,
    ActualizarProductoComponent,
    FarmaciaComponent,
    MedicamentosRecomendadosComponent,
    InformacionComponent,
    CarritoComprasComponent,
    RutaFarmaciaComponent,
    RecuperarCuentaComponent,
    CompraFinalizadaComponent,
    ActualizarClienteComponent,
    ActualizarFarmaciaComponent,
    MostrarFarmaciasComponent,
    ReportePorCategoriaComponent,
    MostrarVentasComponent,
    ReporteMontoPorMesComponent,
    ReporteFarmaciaVentasComponent,
    ReporteProductoComprasComponent,
    ReporteProductosVendidosComponent,
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

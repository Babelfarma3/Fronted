import { Product } from './../../models/product';
import { CarritoDeComprasService } from './../../services/carrito-de-compras.service';
import { Component, OnInit, Query, NgModule } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

@Component({
  selector: 'app-frame15',
  templateUrl: './frame15.component.html',
  styleUrls: ['./frame15.component.css']
})
export class Frame15Component implements OnInit {
  constructor(
    private carritoService: CarritoDeComprasService,
  ) { }

  productosCarrito:Product[]=[];

  ngOnInit(): void {
   this.productosCarrito=this.carritoService.getproductosCarrito();
   console.log(this.productosCarrito)
  }
  checked = false;
  disabled = false;
}

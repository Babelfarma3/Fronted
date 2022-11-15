import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { DistritoService } from './../../services/distrito.service';
import { Distrito } from './../../models/distrito';
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

  productosCarrito:Product[]=[];
  idDistrito!: number;
  distritos!: Distrito[];

  constructor(
    private carritoService: CarritoDeComprasService,
    private distritoService: DistritoService,
    private fb: FormBuilder,
  ) {
    this.getDistritos();
    
   }


  ngOnInit(): void {
   this.productosCarrito=this.carritoService.getproductosCarrito();
  }
  checked = false;
  disabled = false;


  vaciarCarrito(){
    this.productosCarrito= []
  }

  getDistritos(): void{
    this.distritoService.getDistrito().subscribe((data: Distrito[]) => {
      this.distritos=data;
    });
  }

  subtotal():number{

    let x= 0;

    this.productosCarrito.forEach(element => {
      x+=element.precio;
    });

    return x;

  }

}

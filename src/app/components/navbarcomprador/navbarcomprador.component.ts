import { Product } from './../../models/product';
import { Router } from '@angular/router';
import { CarritoDeComprasService } from './../../services/carrito-de-compras.service';
import { Distrito } from './../../models/distrito';
import { DistritoService } from './../../services/distrito.service';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-navbarcomprador',
  templateUrl: './navbarcomprador.component.html',
  styleUrls: ['./navbarcomprador.component.css']
})

export class NavbarcompradorComponent implements OnInit {



  constructor(
    private carritoService: CarritoDeComprasService,
    private router: Router
    ) { 
   
  }

  ngOnInit(): void {
   
  }

  
  salir(){
    this.carritoService.setproductosCarrito([]);
    this.router.navigate(['/']);
  }


}

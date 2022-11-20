import { Product } from './../../models/product';
import { Router, ActivatedRoute } from '@angular/router';
import { CarritoDeComprasService } from './../../services/carrito-de-compras.service';
import { Distrito } from './../../models/distrito';
import { DistritoService } from './../../services/distrito.service';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'app-navbar-comprador',
  templateUrl: './navbarcomprador.component.html',
  styleUrls: ['./navbarcomprador.component.css']
})

export class NavbarcompradorComponent implements OnInit {

  idComprador!:any;

  constructor(
    private carritoService: CarritoDeComprasService,
    private router: Router,
    private route: ActivatedRoute
    ) {

  }

  ngOnInit(): void {
    this.loadId();
  }

  loadId(){
    this.idComprador = this.route.snapshot.params['id'];
  }


  salir(){
    this.carritoService.setproductosCarrito([]);
    this.router.navigate(['/']);
  }


}

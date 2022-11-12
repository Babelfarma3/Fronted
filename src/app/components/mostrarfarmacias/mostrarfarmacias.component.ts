import { NavbarcompradorComponent } from './../navbarcomprador/navbarcomprador.component';
import { NavbarComponent } from './../navbar/navbar.component';
import { FarmaciaService } from './../../services/farmacia.service';
import { Farmacia } from './../../models/farmacia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrarfarmacias',
  templateUrl: './mostrarfarmacias.component.html',
  styleUrls: ['./mostrarfarmacias.component.css']
})
export class MostrarfarmaciasComponent implements OnInit {

  farmacias!:Farmacia[];
  navbar!:NavbarcompradorComponent

  constructor(
    private farmaciaService: FarmaciaService,
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }


  getProducts(){
  
    
    this.farmaciaService.getFarmacias().subscribe((data: Farmacia[]) => {
      this.farmacias = data;
    });
  }
}
  


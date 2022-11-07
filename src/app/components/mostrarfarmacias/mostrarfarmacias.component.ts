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


  constructor(
    private farmaciaService: FarmaciaService
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

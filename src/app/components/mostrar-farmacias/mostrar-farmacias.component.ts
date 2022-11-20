import { DistritoService } from './../../services/distrito.service';
import { Distrito } from './../../models/distrito';
import { Form, FormGroup, FormBuilder } from '@angular/forms';
import { NavbarcompradorComponent } from '../navbar-comprador/navbarcomprador.component';
import { FarmaciaService } from './../../services/farmacia.service';
import { Farmacia } from './../../models/farmacia';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-mostrarfarmacias',
  templateUrl: './mostrarfarmacias.component.html',
  styleUrls: ['./mostrarfarmacias.component.css']
})
export class MostrarfarmaciasComponent implements OnInit {

  MyForm!: FormGroup;
  farmacias!:Farmacia[];
  nombreDistrito!: string;
  distritos!: Distrito[];
  @ViewChild('tab') tabGroup!: MatTabGroup;

  constructor(
    private distritoService: DistritoService,
    private farmaciaService: FarmaciaService,
    private fb: FormBuilder
  ) {
    this.reactiveForm();
  }

  ngOnInit(): void {
    this.getFarmacias(),
    this.getDistritos()
  }

  reactiveForm() {
    this.MyForm = this.fb.group({
      nombreEstablecimiento: [''],
      direccion: [''],
      distrito: [''],
    })
  }


  getFarmacias(){
    this.reactiveForm();

    this.farmaciaService.getFarmacias().subscribe((data: Farmacia[]) => {
      this.farmacias = data;
    });
  }

  getDistritos(): void{
    this.distritoService.getDistrito().subscribe((data: Distrito[]) => {
      this.distritos=data;
    });
  }

  search() {
    if (this.tabGroup.selectedIndex == 0) {
      let nombreEstablecimiento = this.MyForm.value['nombreEstablecimiento'];
      this.farmaciaService.getFarmaciaNombre(nombreEstablecimiento).subscribe((data)=>{
        this.farmacias=data;
      })
    }
    else
    if (this.tabGroup.selectedIndex == 1) {
      let direccion = this.MyForm.value['direccion'];
      this.farmaciaService.getFarmaciaDireccion(direccion).subscribe((data)=>{
        this.farmacias=data;
      })
    }
    else

    if (this.tabGroup.selectedIndex == 2) {
      let distrito = this.nombreDistrito;
      this.farmaciaService.getFarmaciaDistrito(distrito).subscribe((data)=>{
        this.farmacias=data;
      })
    }
  }


}



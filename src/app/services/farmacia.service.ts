import { Farmacia } from './../models/farmacia';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {

  farmacias: Farmacia[] = [
    {
      nombreEstablecimiento: 'FarmaVida',
      direccion: 'Av. Primavera',
      ruc: 12345,
      correoContacto: 'farma@vida.com',
      telefonoContacto: 987654321,
    },
    {
      nombreEstablecimiento: 'Farmacia Angel',
      direccion: 'San Isidro',
      ruc: 12345,
      correoContacto: 'farmacia@angel.com',
      telefonoContacto: 987654321,
    },
  ]

  constructor() { }

  getFarmacias() {
    return this.farmacias.slice();
  }

  addFarmacia(farmacia: Farmacia) {
    this.farmacias.unshift(farmacia);
  }
}

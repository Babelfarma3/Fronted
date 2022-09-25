import { HttpClient } from '@angular/common/http';
import { Farmacia } from './../models/farmacia';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {
  farmaciasPath: string = environment.farmaciasPath;
  constructor(private http:HttpClient) { }

  addFarmacia(farmacia: Farmacia) {
    return this.http.post<Farmacia>(
      this.farmaciasPath,
      farmacia
    )
  }
}

import { HttpClient } from '@angular/common/http';
import { Farmacia } from './../models/farmacia';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {
  constructor(private http:HttpClient) { }

  addFarmacia(farmacia: Farmacia) {
    return this.http.post<Farmacia>(
      'http://localhost:3000/farmacias',
      farmacia
    )
  }
}

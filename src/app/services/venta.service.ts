import { Venta } from './../models/venta';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  basePath: string = environment.basePath;
  constructor(private http: HttpClient) { }

  getVentas(){
    return this.http.get<Venta[]>(`${this.basePath}/ventas`);
  }

  addVenta(venta: Venta){
    return this.http.post<Venta>(
      `${this.basePath}/ventas`,
      venta
    );
  }

  updateVenta(id: any, venta: Venta){
    return this.http.put<Venta>(`${this.basePath}/ventas/${id}`, venta);
  }

  deleteVenta(id: any){
    return this.http.delete<Venta>(`${this.basePath}/ventas/${id}`);
  }
}

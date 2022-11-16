import { HttpClient } from '@angular/common/http';
import { Farmacia } from './../models/farmacia';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {
  basePath: string = environment.basePath;
  idFarmacia: any;
  constructor(private http:HttpClient) { }




  getFarmacias(){
    return this.http.get<Farmacia[]>(`${this.basePath}/farmacias`);
  }

  getFarmaciaId(id: any){
    return this.http.get<Farmacia>(`${this.basePath}/farmacias/${id}`);
  }

  getFarmaciaDireccion(direccion: string){
    return this.http.get<Farmacia[]>(`${this.basePath}/farmacias/buscardireccion/${direccion}`);
  }

  getFarmaciaNombre(nombre: string){
    return this.http.get<Farmacia[]>(`${this.basePath}/farmacias/buscarnombrefarmacia/${nombre}`);
  }

  getFarmaciaDistrito(distrito: string){
    return this.http.get<Farmacia[]>(`${this.basePath}/farmacias/buscarpordistrito/${distrito}`);
  }

  getFarmaciaProductos(producto: string){
    return this.http.get<Farmacia>(`${this.basePath}/farmacias/${producto}`);
  }

  addFarmacia(farmacia: Farmacia) {
    return this.http.post<Farmacia>(
      `${this.basePath}/farmacias`,
      farmacia
    )
  }

  updateFarmacia(id: any, farmacia: Farmacia){
    return this.http.put<Farmacia>(`${this.basePath}/farmacias/${id}`, farmacia);
  }

  deleteFarmacia(id: any){
    return this.http.delete<Farmacia>(`${this.basePath}/farmacias/${id}`);
  }

  setIdFarmacia(id: any){
    this.idFarmacia = id;
  }

  getIdFarmacia():any{
    return this.idFarmacia;
  }


}

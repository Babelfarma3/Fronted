import { HttpClient } from '@angular/common/http';
import { Envio } from './../models/envio';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvioService {
basePath: string = environment.basePath;
  constructor(private http: HttpClient) { }

  getEnvios(){
    return this.http.get<Envio[]>(`${this.basePath}/Envio/$`);
  }

  getEnvioId(id: any){
    return this.http.get<Envio>(`${this.basePath}/distritos/${id}`);
  }

  addEnvio(envio: Envio){
    return this.http.post<Envio>(
      `${this.basePath}/distritos/$`,
      envio
    );
  }

  updateEnvio(id: any, envio: Envio){
    return this.http.put<Envio>(`${this.basePath}/distritos/${id}`, envio);
  }

  deleteEnvio(id: any){
    return this.http.delete<Envio>(`${this.basePath}/distritos/${id}`);
  }
}

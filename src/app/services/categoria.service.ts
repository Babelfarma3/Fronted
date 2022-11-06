import { Categoria } from './../models/categoria';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  basePath: string = environment.basePath;
  constructor(private http: HttpClient) { }

  getCategorias(){
    return this.http.get<Categoria[]>(`${this.basePath}/categorias`);
  }

  getCategoria(categoria: string){
    return this.http.get<Categoria>(`${this.basePath}/categorias/${categoria}`);
  }
}

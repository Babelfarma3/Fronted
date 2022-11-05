import { Usuario } from './../models/usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  basePath: string = environment.basePath;
  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get<Usuario>(`${this.basePath}/usuarios/$`);
  }

  getUsuarioId(){
    return this.http.get<Usuario>(`${this.basePath}/usuarios/${id}`);
  }

  addUsuario(usuario: Usuario){
    return this.http.post<Usuario>(
      `${this.basePath}/usuarios$`,
      usuario
      );
  }

  updateUsuario(id: any, usuario: Usuario){
    return this.http.put<Usuario>(`${this.basePath}/usuarios/${id}`, usuario);
  }

  deleteUsuario(id: any){
    return this.http.delete<Usuario>(`${this.basePath}/usuarios/${id}`);
  }
}

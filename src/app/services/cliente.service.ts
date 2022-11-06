import { Cliente } from './../models/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  basePath: string = environment.basePath;

  constructor(private http:HttpClient) { }

  getClientes(){
    return this.http.get<Cliente[]>(this.basePath);
  }

  getClienteId(id: any) {
    return this.http.get<Cliente>(`${this.basePath}/clientes/${id}`);
  }

  getClienteDni(dni: any){
    return this.http.get<Cliente>(`${this.basePath}/clientes/${dni}`);
  }

  getClienteSexo(sexo: string){
    return this.http.get<Cliente>(`${this.basePath}/clientes/${sexo}`);
  }

  addCliente(cliente: Cliente){
    return this.http.post<Cliente>(
      `${this.basePath}/clientes`,
      cliente
    )
  }

  updateCliente(id: any, cliente: Cliente){
    return this.http.put<Cliente>(`${this.basePath}/clientes/${id}`, cliente);
  }

  deleteCliente(id: any){
    return this.http.delete<Cliente>(`${this.basePath}/clientes/${id}`);
  }
}

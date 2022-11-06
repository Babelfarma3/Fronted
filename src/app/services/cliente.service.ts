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
    return this.http.get<Cliente[]>(`${this.basePath}/clientes`);
  }

  getClienteId(id: any) {
    return this.http.get<Cliente>(`${this.basePath}/clientes/${id}`);
  }

  addCliente(cliente: Cliente){
    return this.http.post<Cliente>(
      `${this.basePath}/clientes`,
      cliente
    )
  }

  updateContrasenia(id: any, cliente: Cliente){
    return this.http.put<Cliente>(`${this.basePath}/clientes/${id}/${cliente.correo}`, cliente);
  }
}

import { Cliente } from './../models/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  clientesPath: string = environment.clientesPath;

  constructor(private http:HttpClient) { }

  getClientes(){
    return this.http.get<Cliente[]>(this.clientesPath);
  }

  getClienteId(id: any) {
    return this.http.get<Cliente>(`${this.clientesPath}/${id}`);
  }

  addCliente(cliente: Cliente){
    return this.http.post<Cliente>(
      this.clientesPath,
      cliente
    )
  }

  updateContrasenia(id: any, cliente: Cliente){
    return this.http.put<Cliente>(`${this.clientesPath}/${id}/${cliente.correo}`, cliente);
  }
}

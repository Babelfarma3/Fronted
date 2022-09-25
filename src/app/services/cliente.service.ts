import { Cliente } from './../models/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  constructor(private http:HttpClient) { }

  addCliente(cliente: Cliente){
    return this.http.post<Cliente>(
      'http://localhost:3000/clientes',
      cliente
    )
  }
}

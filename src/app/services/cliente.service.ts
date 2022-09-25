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

  addCliente(cliente: Cliente){
    return this.http.post<Cliente>(
      this.clientesPath,
      cliente
    )
  }
}

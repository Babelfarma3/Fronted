import { Cliente } from './../models/cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  clientes: Cliente[] = [
    {
      
    }
  ]

  constructor() { }
}

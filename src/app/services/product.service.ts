import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      codigo: 1,
      nombre: 'Paracetamol 500mg',
      precio: 'S/1.00',
      stock: 15,
    },
    {
      codigo: 2,
      nombre: 'Orfidal 1mg',
      precio: 'S/5.00',
      stock: 18,
    },
    {
      codigo: 3,
      nombre: 'Panadol 100mg/ml',
      precio: 'S/15.00',
      stock: 10,
    },
  ]

  constructor() { }

  getProducts() {
    return this.products.slice();
  }

  addProduct(product: Product) {
    this.products.unshift(product);
  }
}

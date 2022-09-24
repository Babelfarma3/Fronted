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
      precio: 1.00,
      existencia: 10,
      stock: 15,
    },
    {
      codigo: 2,
      nombre: 'Orfidal 1mg',
      precio: 5.00,
      existencia: 5,
      stock: 18,
    },
    {
      codigo: 3,
      nombre: 'Panadol 100mg/ml',
      precio: 15.00,
      existencia: 8,
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

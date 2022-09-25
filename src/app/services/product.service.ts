import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  addProduct(product: Product) {
    return this.http.post<Product>(
      'http://localhost:3000/products', 
      product
    );
  }
}

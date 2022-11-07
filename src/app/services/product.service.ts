import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  basePath: string = environment.basePath;
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(`${this.basePath}/productos`);
  }

  getProductoNombre(nombre: string){
    return this.http.get<Product>(`${this.basePath}/productos/${nombre}`);
  }

  getProductoCategoria(categoria: string){
    return this.http.get<Product>(`${this.basePath}/productos/${categoria}`);
  }

  getProductoStock(stock: any){
    return this.http.get<Product>(`${this.basePath}/productos/${stock}`);
  }

  getProductoPrecio(precio: any){
    return this.http.get<Product>(`${this.basePath}/productos/${precio}`);
  }

  addProduct(product: Product) {
    return this.http.post<Product>(
      `${this.basePath}/productos`,
      product
    );
  }

  getProductId(id: any){
    return this.http.get<Product>(`${this.basePath}/productos/id/${id}`);
  }

  updateProduct(id: any, product: Product){
    return this.http.put<Product>(`${this.basePath}/productos/${id}`, product);
  }
  
  deleteProduct(id: any){
    return this.http.delete<Product>(`${this.basePath}/productos/${id}`);
  }
}

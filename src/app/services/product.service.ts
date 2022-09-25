import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsPath: string = environment.productsPath;
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(this.productsPath);
  }

  getProductId(id: any) {
    return this.http.get<Product>(`${this.productsPath}/${id}`);
  }

  addProduct(product: Product) {
    return this.http.post<Product>(
      this.productsPath,
      product
    );
  }

  updateProduct(id: any, product: Product){
    return this.http.put<Product>(`${this.productsPath}/${id}`, product);
  }
  
  deleteProduct(id: any){
    return this.http.delete<Product>(`${this.productsPath}/${id}`);
  }
}

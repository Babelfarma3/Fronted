import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame13',
  templateUrl: './frame13.component.html',
  styleUrls: ['./frame13.component.css']
})
export class Frame13Component implements OnInit {

  products!:Product[];


  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }


  getProducts(){
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });


  }
  

}

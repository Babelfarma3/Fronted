import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-frame25',
  templateUrl: './frame25.component.html',
  styleUrls: ['./frame25.component.css']
})
export class Frame25Component implements OnInit {
  displayedColumns: string[] = ['Código', 'Nombre', 'Precio', 'Existencia', 'Stock', 'Opciones'];
  dataSource = new MatTableDataSource<Product>();

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  } 

  getProducts() {
    this.products = this.productService.getProducts();
    this.dataSource = new MatTableDataSource(this.products);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

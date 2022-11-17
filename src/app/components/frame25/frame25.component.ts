import { FarmaciaService } from './../../services/farmacia.service';
import { getTestBed } from '@angular/core/testing';
import { MatPaginator } from '@angular/material/paginator';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-frame25',
  templateUrl: './frame25.component.html',
  styleUrls: ['./frame25.component.css']
})
export class Frame25Component implements OnInit {
  displayedColumns: string[] = ['id', 'nombre', 'precio', 'stock', 'picture', 'opciones'];
  dataSource = new MatTableDataSource<Product>();

  products!: Product[];

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  
  constructor(private productService: ProductService, private farmaciaService: FarmaciaService) { }

  ngOnInit(): void {
    this.getProducts();
  } 


  getProducts() {
    this.productService.getProductoFarmacia(this.farmaciaService.getIdFarmacia()).subscribe(
      (data)=>{
        //console.log('respuesta de productos: ', data);
        this.processProductResponse(data);
      },
      (error: any) => {
        console.log('error en productos: ', error);
      }
    );
  
  }
  

  processProductResponse(resp: any) {
    const dateProduct: Product[] = [];

    let listCProduct = resp;

    listCProduct.forEach((element: Product) => {
      //element.category = element.category.name;
      element.picture = 'data:image/jpeg;base64,' + element.picture;
      dateProduct.push(element);
    });

    //set the datasource
    this.dataSource = new MatTableDataSource<Product>(dateProduct);
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id)
    .subscribe(()=>{
      this.dataSource.data=this.dataSource.data.filter((p: Product)=>{
        return p.id !== id ? p : false;
      })
    })
  }

}

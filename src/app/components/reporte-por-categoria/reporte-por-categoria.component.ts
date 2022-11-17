import { FarmaciaService } from './../../services/farmacia.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-reporte-por-categoria',
  templateUrl: './reporte-por-categoria.component.html',
  styleUrls: ['./reporte-por-categoria.component.css']
})
export class ReportePorCategoriaComponent implements OnInit {

  chartBar: any;
  chartdoughnut: any;

  constructor(private productService: ProductService,
   private farmaciaService: FarmaciaService ) {
    Chart.register
   }

  ngOnInit(): void {
  }

  getProducts(){
    this.productService.getProductoFarmacia(this.farmaciaService.getIdFarmacia())
  }

}

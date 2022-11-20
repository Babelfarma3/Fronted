import { ActivatedRoute } from '@angular/router';
import { VentaService } from './../../services/venta.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Venta } from './../../models/venta';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mostrarventas',
  templateUrl: './mostrarventas.component.html',
  styleUrls: ['./mostrarventas.component.css']
})
export class MostrarventasComponent {
  displayedColumns: string[] = ['id', 'cantidad', 'fecha', 'precioTotal', 'precioUnit','cliente', 'farmacia','producto'];
  dataSource = new MatTableDataSource<Venta>();

  ventas!: Venta[];
  idFarmacia!:any;

  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  
  constructor(private ventasService: VentaService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getVentas();
  } 


  getVentas() {
    this.idFarmacia = this.route.snapshot.params['id'];
    this.ventasService.getVentasByIdFarmacia(this.idFarmacia).subscribe((data:Venta[])=>{
      this.ventas=data;
      console.log(data);
    })
    this.dataSource = new MatTableDataSource<Venta>(this.ventas);
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}


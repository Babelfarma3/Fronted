import { Venta } from './../../models/venta';
import { ActivatedRoute } from '@angular/router';
import { VentaService } from './../../services/venta.service';
import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-reporte-productos-vendidos',
  templateUrl: './reporte-productos-vendidos.component.html',
  styleUrls: ['./reporte-productos-vendidos.component.css']
})
export class ReporteProductosVendidosComponent {
  chartBar: any;
  idFarmacia!:any;
  constructor(private ventasService: VentaService,
    private route: ActivatedRoute
  ) {
    Chart.register(...registerables)
   }

  ngOnInit(): void {
    this.getCompras();
  }

  getCompras(){
    this.idFarmacia = this.route.snapshot.params['id'];
    this.ventasService.getVentasByIdFarmacia(this.idFarmacia).subscribe({
      next: (data)=>{
        this.processVentasMontoResponse(data);
      },

      error: (error) =>{
        console.log(error);
      },

    })
  }


  processVentasMontoResponse(resp: any) {
    const productos: string[]= [];
    const productosUnicos: string []= [];
    const account: number[] = [];
    var x=0;

    let listCVenta= resp; 

    listCVenta.forEach((element:Venta) => {
      productos.push(element.producto.nombre);
    });

    for(let i = 0 ; i < productos.length ; i++)
    {
      if(productosUnicos.includes(productos[i])){
      
      }
      else{
        productosUnicos.push(productos[i]);
      }
    }

  
      
      for(let j = 0 ; j <productosUnicos.length ; j++){
        x=0;
          for(let i = 0 ; i < listCVenta.length ; i++){
            if(listCVenta[i].producto.nombre==productosUnicos[j]){
              x+=1;
            }
          
        }
        account.push(x);
      }



    this.chartBar = new Chart('canvas-bar',{
      type:'bar',
      data:{
        labels: productosUnicos,
        datasets:[
          {
            label:'Ventas',
            data:account,
            borderColor: '#3cba8f',
            backgroundColor:[
              'rgba(255,99,132,0.9)',
              'rgba(54,162,235,0.9)',
              'rgba(255,206,86,0.9)',
              'rgba(75,192,192,0.9)',
              'rgba(153,102,0,0.9)',
              'rgba(255,159,64,0.9)',
            ]
          }
        ]
      }
    })
  
  }
}

import { Venta } from './../../models/venta';
import { Chart, registerables } from 'chart.js';
import { FarmaciaService } from './../../services/farmacia.service';
import { ActivatedRoute } from '@angular/router';
import { VentaService } from './../../services/venta.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-reporte-farmacia-ventas',
  templateUrl: './reporte-farmacia-ventas.component.html',
  styleUrls: ['./reporte-farmacia-ventas.component.css']
})
export class ReporteFarmaciaVentasComponent {

  chartBar: any;

  constructor(private ventasService: VentaService,
    private farmaciaService:FarmaciaService,
    private route: ActivatedRoute
  ) {
    Chart.register(...registerables)
   }

  ngOnInit(): void {
    this.getFarmacias();
  }

  getFarmacias(){
    this.ventasService.getVentas().subscribe({
      next: (data)=>{
        this.processVentasMontoResponse(data);
      },

      error: (error) =>{
        console.log(error);
      },

    })
  }


  processVentasMontoResponse(resp: any) {
    const farmacias: string[]= [];
    const farmaciasUnicas: string []= [];
    const account: number[] = [];
    var x=0;

    let listCVenta= resp; 

    listCVenta.forEach((element:Venta) => {
      farmacias.push(element.farmacia.nombreEstablecimiento);
    });

    for(let i = 0 ; i < farmacias.length ; i++)
    {
      if(farmaciasUnicas.includes(farmacias[i])){
      
      }
      else{
        farmaciasUnicas.push(farmacias[i]);
      }
    }

  
      
      for(let j = 0 ; j <farmaciasUnicas.length ; j++){
        x=0;
          for(let i = 0 ; i < listCVenta.length ; i++){
            if(listCVenta[i].farmacia.nombreEstablecimiento==farmaciasUnicas[j]){
              x+=1;
            }
          
        }
        account.push(x);
      }



    this.chartBar = new Chart('canvas-bar',{
      type:'bar',
      data:{
        labels: farmaciasUnicas,
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

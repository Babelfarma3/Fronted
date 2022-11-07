import { FarmaciaService } from './../../services/farmacia.service';
import { Farmacia } from './../../models/farmacia';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClienteService } from './../../services/cliente.service';
import { Cliente } from './../../models/cliente';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, enableProdMode } from '@angular/core';

@Component({
  selector: 'app-frame8',
  templateUrl: './frame8.component.html',
  styleUrls: ['./frame8.component.css']
})
export class Frame8Component implements OnInit {

  idClienteIngresado!:number;
  idFarmaciaIngresada!:number;
  myForm!: FormGroup;
  clientes!: Cliente[];
  farmacias!: Farmacia[];

  constructor(private clienteService:ClienteService,
    private farmaciaService:FarmaciaService,
     private router: Router,
     private fb: FormBuilder,
     private snackBar: MatSnackBar
     ) {
    this.reactiveForm();
    this.getClientes();
    this.getFarmacias();
   }

  ngOnInit(): void {
    
  }


  getClientes(){
    this.clienteService.getClientes().subscribe((data: Cliente[]) => {
   
      this.clientes=data;

    });

  }

  getFarmacias(){
    this.farmaciaService.getFarmacias().subscribe((data: Farmacia[]) => {
   
      this.farmacias=data;

    });
  }

  reactiveForm() {
    this.myForm = this.fb.group({
   
      correo: ['', [Validators.required]],
      contraseña: ['', [Validators.required]],

    });
  }

  validate():void{

    let c= this.myForm.get('correo')!.value;
    let p= this.myForm.get('contraseña')!.value;


    for(const element of this.clientes) {
      
      if(element.correo==c && element.contraseña==p && element.role.id==2)
      {
        this.idClienteIngresado=element.id
        this.snackBar.open('Ingreso exitoso', '', {
          duration: 3000,
        });
        this.router.navigate(['/Comprador']);
      }
      else{
        this.snackBar.open('Datos ingresados incorrectos', '', {
          duration: 3000,
        });  
      }
    }


}

}



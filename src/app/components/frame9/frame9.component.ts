import { Role } from './../../models/role';
import { getTestBed } from '@angular/core/testing';
import { ClienteService } from './../../services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from './../../services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from './../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { Distrito } from 'src/app/models/distrito';

@Component({
  selector: 'app-frame9',
  templateUrl: './frame9.component.html',
  styleUrls: ['./frame9.component.css']
})
export class Frame9Component implements OnInit {
  myForm!: FormGroup;
  clientes!: Cliente;
  nombre!: string;
  idDistrito!: number;
  apellidoPaterno!: string;
  apellidoMaterno!: string;
  celular!: number;
  idCliente: any;
  constructor(

    private fb: FormBuilder,
    private clienteService: ClienteService,
    private snackBar: MatSnackBar,
    private router: Router,

    ) {
  }

  ngOnInit(): void {

    this.myForm = this.fb.group({
      id: ['', [Validators.required]],
      correo: ['', [Validators.required]],
      contrasenia: ['', [Validators.required]],
      confContrasenia: ['', [Validators.required]],
    })
  }

  updateContrasenia(){
    
    if(this.myForm.get('id')!.value >= 10000000 && this.myForm.get('id')!.value <= 99999999){
      this.clienteService.getClienteDniCorreo(this.myForm.get('id')!.value, this.myForm.get('correo')!.value).subscribe((data: Cliente)=>{
        this.clientes={
          id: data.id,
          dni: data.dni,
          nombres: data.nombres,
          apellidoPaterno: data.apellidoPaterno,
          apellidoMaterno: data.apellidoMaterno,
          sexo: data.sexo,
          correo: data.correo,
          celular: data.celular,
          fechaNacimiento: data.fechaNacimiento,
          direccion: data.direccion,
          distrito: data.distrito,
          contraseña: this.myForm.get('contrasenia')!.value,
          role: data.role,
        }
        this.clienteService.updateCliente(this.clientes.id, this.clientes).subscribe({
          next: (data) => {
            this.snackBar.open('Se actualizó correctamente la contraseña', '', {
              duration: 3000,
            });
            this.router.navigate(['/Login']);
          },
          error: (err) => {
            console.log(err);
          },
        });
      });

    }
    else if(this.myForm.get('id')!.value>= 10000000000 && this.myForm.get('id')!.value<=99999999999){

    }
    else{
      this.snackBar.open('Por favor verifique su RUC/DNI', '', {
        duration: 3000,
      });
    }
  } 
}

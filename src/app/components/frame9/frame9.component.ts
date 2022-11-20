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
      contrasenia: ['', [Validators.required]]
    })
  }

  updateContrasenia(){
    this.clienteService.getClienteDniCorreo(this.myForm.get('id')!.value, this.myForm.get('correo')!.value).subscribe((data: Cliente)=>{
      this.clientes=data;
    });
    if(this.myForm.get('id')!.value<=99999999){
        const cliente: Cliente={
        id: 0,
        dni: this.clientes.dni,
        nombres: this.clientes.nombres,
        apellidoPaterno: this.clientes.apellidoPaterno,
        apellidoMaterno: this.clientes.apellidoMaterno,
        sexo: this.clientes.sexo,
        correo: this.clientes.correo,
        celular: this.clientes.celular,
        fechaNacimiento: this.clientes.fechaNacimiento,
        direccion: this.clientes.direccion,
        distrito: this.clientes.distrito,
        contraseña: this.myForm.get('contrasenia')!.value,
        role:this.clientes.role,
      };
      this.clienteService.updateCliente(this.clientes.id, cliente).subscribe({
        next: (data) => {
          this.snackBar.open('Se actualizo correctamente la contraseña', '', {
            duration: 3000,
          });
          this.router.navigate(['/Login']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
    else if(this.myForm.get('id')!.value<=99999999999){

    }
    else{
      this.snackBar.open('Se actualizo correctamente la contraseña', '', {
        duration: 3000,
      });
    }
  }  
}

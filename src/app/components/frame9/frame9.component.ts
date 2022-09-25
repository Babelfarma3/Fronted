import { getTestBed } from '@angular/core/testing';
import { ClienteService } from './../../services/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from './../../services/product.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from './../../models/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame9',
  templateUrl: './frame9.component.html',
  styleUrls: ['./frame9.component.css']
})
export class Frame9Component implements OnInit {
  myForm!: FormGroup;
  cliente!: Cliente;
  nombre!: string;
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
    this.idCliente = this.myForm.get('id');
    this.clienteService.getClienteId(this.idCliente)
      .subscribe((data)=>{
        this.cliente = data;
      })
    
    const cliente: Cliente={
      id: this.myForm.get('id')!.value,
      nombres: this.cliente.nombres,
      apellidoPaterno: this.apellidoPaterno,
      apellidoMaterno: this.apellidoMaterno,
      celular: this.celular,
      correo: this.myForm.get('correo')!.value,
      contrasenia: this.myForm.get('contrasenia')!.value,
    }
    this.clienteService.updateContrasenia(this.idCliente, cliente).subscribe({
      next:(data)=>{
        this.snackBar.open('Contraseña actualizada correctamente.','',{duration: 3000});
        this.router.navigate(['/Login']);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}

import { Cliente } from './../../models/cliente';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ClienteService } from './../../services/cliente.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frame5',
  templateUrl: './frame5.component.html',
  styleUrls: ['./frame5.component.css']
})
export class Frame5Component implements OnInit {
    myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private snackBar: MatSnackBar,
    private router: Router,
  ){
    this.reactiveForm();
  }

  ngOnInit(): void {
  }

  reactiveForm(){
    this.myForm = this.fb.group({
      /*
      id:['', Validators.required],
      nombres: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      correo: ['', Validators.required],
      celular: ['', Validators.required],
      contrasenia: ['', Validators.required],
      */
    })
  }
  /*
  saveCliente(){
    const cliente: Cliente={
      id: this.myForm.get('id')!.value,
      nombres: this.myForm.get('nombres')!.value,
      apellidoPaterno: this.myForm.get('apellidoPaterno')!.value,
      apellidoMaterno: this.myForm.get('apellidoMaterno')!.value,
      correo: this.myForm.get('correo')!.value,
      celular: this.myForm.get('celular')!.value,
      //contrasenia: this.myForm.get('contrasenia')!.value,
    }
    this.clienteService.addCliente(cliente).subscribe({
      next:(data)=>{
        this.snackBar.open('Se ha registrado correctamente', '', {duration: 3000});
        this.router.navigate(['/Comprador'])
      },
      error:(err)=>{
        console.log(err);
      }
    })
  } 
  */
}

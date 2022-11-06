import { DistritoService } from './../../services/distrito.service';
import { Distrito } from './../../models/distrito';
import { UsuarioService } from './../../services/usuario.service';
import { Usuario } from './../../models/usuario';
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
    distritos: Distrito[] = [];
  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private usuarioService: UsuarioService,
    private distritoService: DistritoService,
    private snackBar: MatSnackBar,
    private router: Router,
  ){
    this.reactiveForm();
  }

  ngOnInit(): void {
    this.reactiveForm();
    this.getDistritos();
  }

  reactiveForm(){
    this.myForm = this.fb.group({
      id: [''],
      dni: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      sexo: ['', Validators.required],
      correo: ['', Validators.required],
      celular: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      direccion: ['', Validators.required],
      distrito: ['', Validators.required],
      contrasenia: ['', Validators.required],
      confContrasenia: ['', Validators.required],
    })
  }

  getDistritos(){
    this.distritoService.getDistrito().subscribe(
      (data: any) => {
        this.distritos = data;
      },
      (error: any) => {
        console.log('error al consultar distritos');
      }
    );
  }

  saveCliente(){
    const cliente: Cliente={
      id: 0,
      dni: this.myForm.get('dni')!.value,
      nombres: this.myForm.get('nombres')!.value,
      apellidoPaterno: this.myForm.get('apellidoPaterno')!.value,
      apellidoMaterno: this.myForm.get('apellidoMaterno')!.value,
      sexo: this.myForm.get('sexo')!.value,
      correo: this.myForm.get('correo')!.value,
      celular: this.myForm.get('celular')!.value,
      fechaNacimiento: this.myForm.get('fechaNacimiento')!.value,
      direccion: this.myForm.get('direccion')!.value,
      distrito: this.myForm.get('distrito')!.value,
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
  saveUsuario(){
    const usuario: Usuario={
      id: 0,
      usuario: this.myForm.get('correo')!.value,
      contrasenia: this.myForm.get('contrasenia')!.value,
      role: 'cliente',
    }
    this.usuarioService.addUsuario(usuario).subscribe({
      next:(data)=>{
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  saveAll(){
    const contrasenia: string = this.myForm.get('contrasenia')!.value;
    const confContrasenia: string = this.myForm.get('confContrasenia')!.value;
    if(contrasenia == confContrasenia){
      this.saveUsuario();
      this.saveCliente();
    }
    else{
      this.snackBar.open('Las contraseñas ingresadas no coinciden', '', {duration: 5000});
    }
  }
}

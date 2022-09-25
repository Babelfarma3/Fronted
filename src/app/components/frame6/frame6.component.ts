import { Farmacia } from './../../models/farmacia';
import { FarmaciaService } from './../../services/farmacia.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frame6',
  templateUrl: './frame6.component.html',
  styleUrls: ['./frame6.component.css']
})
export class Frame6Component implements OnInit {
  myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private farmaciaService: FarmaciaService,
    private snackBar: MatSnackBar,
    private router: Router,
  ) { 
    this.reactiveForm();
  }

  ngOnInit(): void {
  }

  reactiveForm(){
    this.myForm = this.fb.group({
      id: ['', Validators.required],
      nombresDuenio: ['', Validators.required],
      apellidosDuenio: ['', Validators.required],
      nombreEstablecimiento: ['', Validators.required],
      direccion: ['', Validators.required],
      correoContacto: ['', Validators.required],
      contrasenia: ['', Validators.required],
    })
  }
    
  saveFarmacia(){
      const farmacia: Farmacia={
        id: this.myForm.get('id')!.value,
        nombresDuenio: this.myForm.get('nombresDuenio')!.value,
        apellidosDuenio: this.myForm.get('apellidosDuenio')!.value,
        nombreEstablecimiento: this.myForm.get('nombreEstablecimiento')!.value,
        direccion: this.myForm.get('direccion')!.value,
        correoContacto: this.myForm.get('correoContacto')!.value,
        contrasenia: this.myForm.get('contrasenia')!.value,
      }
      this.farmaciaService.addFarmacia(farmacia).subscribe({
        next:(data)=>{
          this.snackBar.open('Se ha registrado correctamente', '', {duration: 3000});
          this.router.navigate(['/Farmacia']);
        },
        error:(err)=>{
          console.log(err);
        }
      })
    }
}

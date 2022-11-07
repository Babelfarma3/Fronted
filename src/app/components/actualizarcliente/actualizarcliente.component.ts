import { DistritoService } from './../../services/distrito.service';
import { ClienteService } from './../../services/cliente.service';
import { Distrito } from './../../models/distrito';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizarcliente',
  templateUrl: './actualizarcliente.component.html',
  styleUrls: ['./actualizarcliente.component.css']
})
export class ActualizarclienteComponent implements OnInit {
  myForm!: FormGroup;
  idDistrito!: number;
  distritos!: Distrito[];

  constructor(    
    private fb: FormBuilder,
    private clienteService: ClienteService ,
    private distritoService: DistritoService,
    private snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
  }

}

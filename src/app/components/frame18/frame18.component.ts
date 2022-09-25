import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-frame18',
  templateUrl: './frame18.component.html',
  styleUrls: ['./frame18.component.css']
})
export class Frame18Component implements OnInit {
    myForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private router: Router,
  ){ 
    this.reactiveForm();
  }

  ngOnInit(): void {
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      id:[''],
      nombre: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      stock: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    })
  }

  saveProduct() {
    const product: Product={
      id: 0,
      nombre: this.myForm.get('nombre')!.value,
      precio: this.myForm.get('precio')!.value,
      stock: this.myForm.get('stock')!.value,
      descripcion: this.myForm.get('descripcion')!.value,
    }
    this.productService.addProduct(product).subscribe({
      next: (data)=>{
        this.snackBar.open('Producto registrado exitosamente','',{duration: 3000});
        this.router.navigate(['/ListaDeProductos']);
      }, 
      error:(err)=>{
        console.log(err);
      }
    });
  }
}

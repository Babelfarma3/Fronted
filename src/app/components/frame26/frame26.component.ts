import { Component, OnInit, Query } from '@angular/core';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-frame26',
  templateUrl: './frame26.component.html',
  styleUrls: ['./frame26.component.css']
})
export class Frame26Component implements OnInit {
  myForm!: FormGroup;
  /*
  product!: Product;
  idProduct: any;*/
  constructor(
    /*
    private fb: FormBuilder,
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,*/
  ){

  }

  ngOnInit(): void {
    /*this.idProduct = this.route.snapshot.paramMap.get('id');
    this.productService.getProductId(this.idProduct)
      .subscribe((data)=>{
        this.product = data;
        this.myForm = this.fb.group({
          nombre: [this.product.nombre, [Validators.required]],
          precio: [this.product.precio, [Validators.required, Validators.maxLength]],
          stock: [this.product.stock, [Validators.required]],
          descripcion: [this.product.descripcion, [Validators.required]],
        })
      })*/
  }
/*
  updateProduct(){
    const product: Product={
      id: 0,
      nombre: this.myForm.get('nombre')!.value,
      precio: this.myForm.get('precio')!.value,
      stock: this.myForm.get('stock')!.value,
      descripcion: this.myForm.get('descripcion')!.value,
    }
    this.productService.updateProduct(this.idProduct, product).subscribe({
      next: (data)=>{
        this.snackBar.open('Producto actualizado exitosamente','',{duration: 3000});
        this.router.navigate(['/ListaDeProductos']);
      }, 
      error:(err)=>{
        console.log(err);
      }
    });
  }*/
}

import { Product } from './../../../models/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    ) {
    this.reactiveForm();
  }

  ngOnInit(): void { }
  
  reactiveForm() {
    this.myForm = this.fb.group({
      codigo:['', [Validators.required]],
      nombre:['', [Validators.required]],
      precio:['', [Validators.required]],
      exostencia:['', [Validators.required]],
      stock:['', [Validators.required]],
    });
  }

  saveEmployee(): void {
    const product: Product = {
      codigo: this.myForm.get('codigo')!.value,
      nombre: this.myForm.get('nombre')!.value,
      precio: this.myForm.get('precio')!.value,
      existencia: this.myForm.get('existencia')!.value,
      stock: this.myForm.get('stock')!.value,
    }
  }
}

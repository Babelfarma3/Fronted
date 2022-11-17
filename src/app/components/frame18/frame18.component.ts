import { FarmaciaService } from './../../services/farmacia.service';
import { CategoriaService } from './../../services/categoria.service';
import { Categoria } from './../../models/categoria';
import { Component, OnInit } from '@angular/core';
import { Product } from './../../models/product';
import { ProductService } from './../../services/product.service';
import { Form, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-frame18',
  templateUrl: './frame18.component.html',
  styleUrls: ['./frame18.component.css']
})
export class Frame18Component implements OnInit {
    myForm!: FormGroup;
    idCategoria!: number;
    categorias!: Categoria[];
    selectedFile: any;
    nameImg: string = '';

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private categoriaService: CategoriaService,
    private snackBar: MatSnackBar,
    private router: Router,
    private farmaciaService: FarmaciaService
  ){ 
    this.reactiveForm();
    this.getCategorias();
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
      categoria: ['', [Validators.required]],
      picture: ['', [Validators.required]]
    })
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);

    this.nameImg = event.target.files[0].name;
  }

  saveProduct() {
    let c = new Categoria();
    c.id=this.idCategoria;

    const product: Product={
      id: 0,
      nombre: this.myForm.get('nombre')!.value,
      precio: this.myForm.get('precio')!.value,
      stock: this.myForm.get('stock')!.value,
      descripcion: this.myForm.get('descripcion')!.value,
      categoria: this.myForm.get('categoria')?.value,
      picture: this.selectedFile,
    }

    const uploadImageData = new FormData();
    uploadImageData.append('picture', product.picture, product.picture.name);
    uploadImageData.append('nombre', product.nombre);
    uploadImageData.append('precio', product.precio.toString());
    uploadImageData.append('stock', product.stock.toString());
    uploadImageData.append('descripcion', product.descripcion);
    uploadImageData.append('categoryId', product.categoria);

    this.productService.addProduct(this.farmaciaService.getIdFarmacia(), uploadImageData).subscribe({
      next: (data)=>{
        this.snackBar.open('Producto registrado exitosamente','',{
          duration: 3000
        });
        this.router.navigate(['/ListaDeProductos']);
      }, 
      error:(err)=>{
        console.log(err);
      }
    });


    /*this.productService.addProduct(this.farmaciaService.getIdFarmacia(),product).subscribe({
      next: (data)=>{
        this.snackBar.open('Producto registrado exitosamente','',{
          duration: 3000
        });
        this.router.navigate(['/ListaDeProductos']);
      }, 
      error:(err)=>{
        console.log(err);
      }
    });*/
  }

  getCategorias(): void{
    this.categoriaService.getCategorias().subscribe((data: Categoria[])=>{
      this.categorias=data;
    })
  }
}

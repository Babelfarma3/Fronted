import { FarmaciaService } from './../../services/farmacia.service';
import { CarritoDeComprasService } from './../../services/carrito-de-compras.service';
import { MatTabGroup } from '@angular/material/tabs';
import { CategoriaService } from './../../services/categoria.service';
import { Categoria } from './../../models/categoria';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-frame13',
  templateUrl: './frame13.component.html',
  styleUrls: ['./frame13.component.css']
})
export class Frame13Component implements OnInit {

  MyForm!: FormGroup;
  categorias!: Categoria[];
  products!:Product[];
  nombreCategoria!:string;
  productosCarrito:Product[]=[];
  
  
  @ViewChild('tab') tabGroup!: MatTabGroup;

  constructor(
    private productService: ProductService,
    private categoriaService: CategoriaService,
    private fb: FormBuilder,
    private carritoService: CarritoDeComprasService,
    private farmaciaService: FarmaciaService,
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategorias();
  }


  reactiveForm() {
    this.MyForm = this.fb.group({
      nombre: [''],
      categoria: [''],
    })
  }


  processProductResponse(resp: any) {
    const dateProduct: Product[] = [];

    let listCProduct = resp;

    listCProduct.forEach((element: Product) => {
      element.picture = 'data:image/jpeg;base64,' + element.picture;
      dateProduct.push(element);
    });

    this.products=dateProduct;
  }


  getProducts(){
    this.reactiveForm();
    this.productService.getProductoPrecio().subscribe(
      (data)=>{
        this.processProductResponse(data);
      },
      (error: any) => {
        console.log('error en productos: ', error);
      }
    );
  }

  getCategorias(): void{
    this.categoriaService.getCategorias().subscribe((data: Categoria[]) => {
      this.categorias=data;
    });
  }

  getFarmaciaByProducto(id: number): void {

     this.farmaciaService.getFarmaciaByProductoId(id).subscribe((data)=>{

     });

  }

  search() {
    if (this.tabGroup.selectedIndex == 0) {
      let nombreProducto = this.MyForm.value['nombre'];
      this.productService.getProductoNombre(nombreProducto).subscribe((data)=>{
        this.products=data;
      })
    } 
    else
    if (this.tabGroup.selectedIndex == 1) {
      let categoria = this.nombreCategoria;
      this.productService.getProductoCategoria(categoria).subscribe((data)=>{
        this.products=data;
      })
    } 
  }

  AgregarAlCarrito(number: number): void{

    this.productService.getProductId(number).subscribe((data)=>{
      if(this.productosCarrito.length==0)
      this.productosCarrito.push(data);
      else
      if(this.ValidarSinRepeticion(data))
      this.productosCarrito.push(data);

    
    })



    this.carritoService.setproductosCarrito(this.productosCarrito);
        
  }


  ValidarSinRepeticion(product: Product):boolean{
   

    if(this.productosCarrito)
    for(let item of this.productosCarrito)
    {
      if(item.id==product.id)
      return false;
    }

    return true;
  }
}

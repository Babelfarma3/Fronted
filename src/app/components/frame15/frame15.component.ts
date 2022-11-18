import { environment } from './../../../environments/environment';
import { IPayPalConfig, ICreateOrderRequest } from './../../../../node_modules/ngx-paypal/lib/models/paypal-models.d';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from './../../services/product.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DistritoService } from './../../services/distrito.service';
import { Distrito } from './../../models/distrito';
import { Product } from './../../models/product';
import { CarritoDeComprasService } from './../../services/carrito-de-compras.service';
import { Component, OnInit, Query, NgModule, ViewChild, ElementRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'app-frame15',
  templateUrl: './frame15.component.html',
  styleUrls: ['./frame15.component.css']
})
export class Frame15Component implements OnInit {

  public payPalConfig?: IPayPalConfig;
  productosCarrito: Product[] = [];
  idDistrito!: number;
  distritos!: Distrito[];
  subtotalb: any;
  cantidades: any[] = [];
  myForm!: FormGroup;
  products: Product[] = [];


  constructor(
    private carritoService: CarritoDeComprasService,
    private distritoService: DistritoService,
    private productService: ProductService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router,
  ) {
    this.getDistritos();
    this.reactiveForm();
    this.mostrarProc();
    this.recuperarValores()

  }


  ngOnInit(): void {
    this.initConfig();
  }
  checked = false;
  disabled = false;

  mostrarProc() {
    this.productosCarrito = this.carritoService.getproductosCarrito();
    this.processProductResponse(this.productosCarrito);
  }


  private initConfig(): void {
    this.payPalConfig = {
      currency: 'USD',
      clientId: environment.clientId,
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'USD',
            value: '9.99',
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: '9.99'
              }
            }
          },
          items: [{
            name: 'Enterprise Subscription',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'USD',
              value: '9.99',
            },
          }]
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get().then((details: any) => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      }
    };
  }









  processProductResponse(resp: any) {
    const dateProduct: Product[] = [];

    let listCProduct = resp;

    listCProduct.forEach((element: Product) => {
      element.picture = 'data:image/jpeg;base64,' + element.picture;
      dateProduct.push(element);
    });

    this.products = dateProduct;
  }


  recuperarValores() {
    for (let i = 0; i < this.productosCarrito.length; i++) {
      this.cantidades[i] = this.myForm.get('cantidad')!.value;
    }
  }


  getSemisuma(indice: any) { //precio e índice el producto

    let cantidad = this.myForm.get('cantidad')!.value;

    this.cantidades[indice] = cantidad;

  }

  reactiveForm() {
    this.myForm = this.fb.group({
      cantidad: [1, [Validators.min(0)]],
    })
  }


  vaciarCarrito() {
    this.cantidades = [];
    this.productosCarrito = [];
  }

  getDistritos(): void {
    this.distritoService.getDistrito().subscribe((data: Distrito[]) => {
      this.distritos = data;
    });
  }

  subtotal(): number {

    let x = 0;
    for (let i = 0; i < this.cantidades.length; i++) {

      x += this.cantidades[i] * this.productosCarrito[i].precio;

    }
    return x;
  }

  eliminarProducto(indice: any) {
    this.cantidades.splice(indice, 1);
    this.productosCarrito.splice(indice, 1);

  }

  actualizarStock() {

    for (let i = 0; i < this.productosCarrito.length; i++) {

      const product: Product = {
        id: 0,
        nombre: this.productosCarrito[i].nombre,
        precio: this.productosCarrito[i].precio,
        stock: this.productosCarrito[i].stock - this.cantidades[i],
        descripcion: this.productosCarrito[i].descripcion,
        categoria: this.productosCarrito[i].categoria,
        picture: this.productosCarrito[i].picture
      }
      this.productService.updateProduct(this.productosCarrito[i].id, product).subscribe({
        next: (data) => {
          this.snackBar.open('Productos comprados con éxito', '', { duration: 3000 });
          this.router.navigate(['/Busqueda']);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }

  }
}

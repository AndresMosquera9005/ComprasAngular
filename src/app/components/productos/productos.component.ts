import { Component } from '@angular/core';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
productosDeComida: any;
  constructor() {}
  comprar(){
    alert("Producto agregado al carrito de compras");
    const lista_pedido = document.getElementById("lista_pedido");
    const eleccion_cliente = document.getElementById("eleccion_cliente");
    let cantidad = 0;

    if (eleccion_cliente == null) {
      alert("No ha seleccionado ningun producto");
    } else {
      
    }
  }

}

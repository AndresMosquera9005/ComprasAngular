import { Component } from '@angular/core';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

}
const productosDeComida = [

  {
    name: 'HAMBURGUESA',
    description: 'HAMBURGUESA DE CARNE DE RES CON QUESO Y PAPAS',
    imageUrl: 'https://via.placeholder.com/150',
    price: 9.99
  },
  {
    name: 'PIZZA',
    description: 'SABOR PINCANTE TOSTACOS PICO GALLO',
    imageUrl: 'https://via.placeholder.com/150',
    price: 19.99
  }
]
export default productosDeComida;
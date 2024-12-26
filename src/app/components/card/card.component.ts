import { Component, Input, NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

// @Component({
//   selector: 'app-card',
//   standalone: true,
//   imports: [],
//   templateUrl: './card.component.html',
//   styleUrl: './card.component.css'
// })
// export class CardComponent {

// }

interface Product {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
}

@Component({
  selector: 'app-product-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class ProductCardComponent {
  @Input() product: Product | undefined;
}

@NgModule({
  
  imports: [

    MatCardModule
  ]
  
})
export class AppModule { }
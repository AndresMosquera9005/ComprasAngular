import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { InicioComponent } from "./components/inicio/inicio.component";
import { ComprasComponent } from "./components/compras/compras.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, InicioComponent, ComprasComponent, ProductosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'compras';
}

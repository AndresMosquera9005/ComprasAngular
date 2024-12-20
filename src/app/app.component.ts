import { Component } from '@angular/core';
import { HeaderComponent } from "./components/header/header.component";
import { ProductosComponent } from "./components/productos/productos.component";
import { InicioComponent } from "./components/inicio/inicio.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'compras';
}

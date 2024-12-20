import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductosComponent } from './components/productos/productos.component';

export const routes: Routes = [
    {
        path: "", component: InicioComponent
    },
    {
        path: "header", component: HeaderComponent
    },
    {
        path: "producto", component: ProductosComponent
    }
];

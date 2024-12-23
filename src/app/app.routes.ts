import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ComprasComponent } from './components/compras/compras.component';

export const routes: Routes = [
    {
        path: "Inicio", component: InicioComponent
    },
    {
        path: "producto", component: ProductosComponent
    },
    {
        path: "compras", component: ComprasComponent
    }
];

import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ComprasComponent } from './components/compras/compras.component';
import { BodyComponent } from './components/body/body.component';

export const routes: Routes = [
    // {
    //     path: '', component: InicioComponent
    // },
    {
        path: "body", component: BodyComponent
    },
    {
        path: 'producto', component: ProductosComponent
    },
    {
        path: 'compras', component: ComprasComponent
    }
];

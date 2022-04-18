import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ventas',
    pathMatch: 'full',
  },
  {
    path: 'ventas',
    loadChildren: () => import('./presentacion/ventas/ventas.module').then((m) => m.VentasModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

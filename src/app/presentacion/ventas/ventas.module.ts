import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunModule } from './../comun/comun.module';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaVentaComponent } from './consulta-venta/consulta-venta.component';
import { DetalleVentaComponent } from './detalle-venta/detalle-venta.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultaVentaComponent
  }
];

@NgModule({
  declarations: [
    ConsultaVentaComponent,
    DetalleVentaComponent
  ],
  imports: [
    CommonModule,
    ComunModule,
    RouterModule.forChild(routes)
  ]
})
export class VentasModule { }

import { Component, OnInit } from '@angular/core';
import { VentaRepositoryService } from '../../../core/repositorios/venta-repository.service';
import { VentaFiltro } from '../../../modelo/request/venta-filtro';
import { PRESENTACION } from '../../../core/constantes/PRESENTACION';
import { SerializationHelper } from '../../../core/utilidad/serialization-helper';
import { Venta } from '../../../modelo/entidades/venta';
import { MatDialog } from '@angular/material/dialog';
import { DetalleVentaComponent } from '../detalle-venta/detalle-venta.component';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta-venta.component.html',
  styleUrls: ['./consulta-venta.component.css']
})
export class ConsultaVentaComponent implements OnInit
{
  public filtros: VentaFiltro;
  public filtrosAplicados: VentaFiltro;
  public listadoVentas: Venta[] = [];
  public total: number = 0;

  constructor(
    private ventaRepositoryService: VentaRepositoryService,
    private dialog: MatDialog
  ) { }

  async ngOnInit(): Promise<void>
  {
    this.filtros = {
      pagina: 1,
      tamanio: PRESENTACION.TAMANIO_PAGINACION_DEFECTO
    } as VentaFiltro;
    await this.buscar();
  }

  public async buscar(): Promise<void>
  {
    this.filtrosAplicados = SerializationHelper.ShallowCopy(this.filtros);
    await this.realizarBusqueda();
  }

  private async realizarBusqueda(): Promise<void>
  {
    const resultado = await this.ventaRepositoryService.listarFiltrado(this.filtrosAplicados);
    this.listadoVentas = resultado.lista;
    this.total = resultado.total;
  }

  public async cambiarPagina(pagina: number): Promise<void>
  {
    this.filtros.pagina = pagina;
    this.filtrosAplicados.pagina = pagina;
    await this.realizarBusqueda();
  }

  public verDetalleVenta(venta: Venta): void
  {
    const dialogRef = this.dialog.open(DetalleVentaComponent, {
      width: 'auto',
      data: {
        venta: venta
      },
      autoFocus: true,
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(() => { });
  }
}
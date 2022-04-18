import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VentaFiltro } from './../../modelo/request/venta-filtro';
import { environment } from 'src/environments/environment';
import { RequestSerializerService } from '../servicios/request-serializer.service';
import { RespuestaPaginada } from './../../modelo/base/respuesta-paginada';
import { Venta } from 'src/app/modelo/entidades/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaRepositoryService
{
  private apiUrl: string = `${ environment.apiExamenCerticom }/venta`;

  constructor(
    private httpClient: HttpClient,
    private requestSerializer: RequestSerializerService
  ) { }

  public listarFiltrado(
    filtro: VentaFiltro
  ): Promise<RespuestaPaginada<Venta>>
  {
    debugger
    const parametros: string = this.requestSerializer.ObtenerQueryStringDesdeObjeto(filtro);
    const url = `${ this.apiUrl }?${ parametros }`;
    return new Promise<RespuestaPaginada<Venta>>(resolve =>
    {
      this.httpClient.get<RespuestaPaginada<Venta>>(url).subscribe(response =>
      {
        resolve(response);
      });
    });
  }




}
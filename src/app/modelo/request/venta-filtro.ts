import { SolicitudPaginada } from './../base/solicitud-paginada';

export interface VentaFiltro extends SolicitudPaginada
{
  fecha: string | null;
}

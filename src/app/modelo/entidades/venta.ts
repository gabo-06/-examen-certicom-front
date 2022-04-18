import { EntidadBase } from '../base/entidad-base';

export interface Venta extends EntidadBase
{
  // id: number;
  cliente: string;
  fecha: string;
}
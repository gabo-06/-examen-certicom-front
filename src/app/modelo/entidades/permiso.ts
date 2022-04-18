export interface Permiso {
  id: number;
  ruta: string;
  label: string;
  icono: string;
  idPadre: number | null;
  hijos: Permiso[];
  desplegado: boolean;  
}

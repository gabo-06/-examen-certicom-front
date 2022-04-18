import { Component, OnInit, ViewChild } from '@angular/core';
import { Permiso } from './../../../../modelo/entidades/permiso';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit
{
  public menus: Permiso[] = [];
  public drawer: MatDrawer | undefined;
  @ViewChild('drawer') set MatDrawer(value: MatDrawer)
  {
    this.drawer = value;
  }

  constructor(private router: Router)
  { }

  ngOnInit(): void
  {
    this.menus = [
      {
        id: 1,
        ruta: '/ventas',
        label: 'Ventas',
        icono: '',
        idPadre: 0,
        desplegado: true,
        hijos: []
      }
    ];
  }
  
  public Navegar(site: string): void
  {
    this.router.navigate([site]);
    this.drawer.toggle();
  }

  public toggle(grant: Permiso): void
  {
    if (grant.hijos.length > 0)
      grant.desplegado = !grant.desplegado
    else
      this.Navegar(grant.ruta);
  }
}

import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
// import { SessionStorageService } from './../../../../../core/servicios/session-storage.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaccional-template',
  templateUrl: './transaccional-template.component.html',
  styleUrls: ['./transaccional-template.component.css']
})
export class TransaccionalTemplateComponent implements OnInit {

  @Input() Titulo: string | null = null;
  @Input() UrlRetorno: string | null = null;

  public MostrarProyecto: boolean = true;

  constructor(
    private router: Router,
    // private sessionStorageService: SessionStorageService
  ) { }

  ngOnInit(): void {
    // this.MostrarProyecto = !!this.sessionStorageService.UsuarioAutenticado.idProyectoUnidad;
  }

  public GoBack(): void {
    this.router.navigate([this.UrlRetorno]);
  }

}

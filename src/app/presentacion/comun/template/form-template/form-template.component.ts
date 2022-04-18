import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  @Input() Acciones: boolean = true;

  constructor(
    private router: Router,

  ) { }

  ngOnInit(): void {
  }

}

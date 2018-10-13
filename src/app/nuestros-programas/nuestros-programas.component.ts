import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuestros-programas',
  templateUrl: './nuestros-programas.component.html',
  styleUrls: ['./nuestros-programas.component.css',
              '../../assets/theme.shortcodes.css',
              '../../assets/responsive.css',
              '../../assets/default.css']
})
export class NuestrosProgramasComponent implements OnInit {

  items = [];

  constructor() {
    this.items = ['Conferencias, pláticas y talleres a empresas.', 'Conferencias para adolescents y niños.',
                  'Conferencias para padres de familia', 'Tratamientos psicológicos y psiquiátricos  en nuestro centro de desarrollo humano para toda la familia',
                  'Detección temprana hacia un comportamiento con características adictivas o perfil adictivo'];
  }

  ngOnInit() {
  }

}

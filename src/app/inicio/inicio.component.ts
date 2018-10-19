import { Component, OnInit } from '@angular/core';
import { MysqlConnectionService } from '../mysql-connection.service';
import { Observable } from 'rxjs';

import { Counter } from '../Counter';

import * as $ from 'jquery';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css',
              './inicio.style.css',
              '../../assets/theme.shortcodes.css',
              '../../assets/responsive.css',
              '../../assets/default.css',
              '../../assets/css/settings.css',
              '../../assets/fonts/css/fontello.css',
              '../../assets/core.animation.css']
})
export class InicioComponent implements OnInit {

  // public counters = [];

  contadores: Array<Counter>;

  constructor() { }

  // constructor( private mysql:MysqlConnectionService ) {
  //   this.contadores = mysql.getCounter();
  //  }

  ngOnInit() {

    // this._mysqlConnectionService.getCounter().subscribe( _mysqlConnectionService => this.contadores$ = _mysqlConnectionService)

    $('.sc_skills_total').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 20000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
    });

  }

}

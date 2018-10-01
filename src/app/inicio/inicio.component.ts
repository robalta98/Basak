import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {

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

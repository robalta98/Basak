import { Component, OnInit } from '@angular/core';

import { trigger, style, transition, animate, query, keyframes, stagger } from '@angular/animations';

// import * as $ from 'jquery';

@Component({
  selector: 'app-agradecimientos',
  templateUrl: './agradecimientos.component.html',
  styleUrls: ['./agradecimientos.component.css'],
  animations: [

    trigger('listAnimation', [

      transition('* => *', [

        query(':enter', style({ opacity: 0 }), { optional: true }),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 0}),
            style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0px)', offset: 1}),
          ]))
        ])
        , {optional: true}),

        query(':leave', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0px)', offset: 0}),
            style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75px)', offset: 1}),
          ]))
        ]), {optional: true})
      ])

    ]),

    trigger('explainerAnim', [
      transition('* => *', [
        query('.columna', style({ opacity: 0, transform:'translateX(-40px)' })),

        query('.columna', stagger('500ms', [
          animate('800ms 2.2s ease-out', style({ opacity: 1, transform: 'translateX(0px)'}))
        ]))
      ])
    ])

  ]
})
export class AgradecimientosComponent implements OnInit {

  items = [];

  constructor() {
    this.items = ['BASAK','Acrónimo en latín','B: Bene estare (bienestar)',
    'A: Auditare (ayuda)','S: Salus (salud)','A: Aetas (vida)','K: Konstitutum (Compromiso)'
  ];
  }

   pushItem() {
     this.items.push('BASAK');
   }

   removeItem(){
     this.items.pop();
   }

  ngOnInit() {
  //   $('.sc_skills_total').each(function () {
  //     $(this).prop('Counter',0).animate({
  //         Counter: $(this).text()
  //     }, {
  //         duration: 4000,
  //         easing: 'swing',
  //         step: function (now) {
  //             $(this).text(Math.ceil(now));
  //         }
  //     });
  // });
  }

}

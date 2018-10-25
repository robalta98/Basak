import { Component, OnInit } from '@angular/core';

import { trigger, style, transition, animate, query, keyframes, stagger } from '@angular/animations';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css',
              '../../assets/theme.shortcodes.css',
              '../../assets/responsive.css',
              '../../assets/default.css'],
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
export class QuienesSomosComponent implements OnInit {

  items = [];

  constructor() { }

  ngOnInit() {

    this.items = ['B: Bene estare (bienestar)',
    'A: Auditare (ayuda)','S: Salus (salud)','A: Aetas (vida)','K: Konstitutum (Compromiso)'
  ];

  }

}

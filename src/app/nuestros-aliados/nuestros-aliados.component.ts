import { Component, OnInit } from '@angular/core';
import { MysqlConnectionService } from '../mysql-connection.service';
import { Observable } from 'rxjs';

// import { Language } from '../language';
import { Counter } from '../Counter';

@Component({
  selector: 'app-nuestros-aliados',
  templateUrl: './nuestros-aliados.component.html',
  styleUrls: ['./nuestros-aliados.component.css']
})
export class NuestrosAliadosComponent implements OnInit {

    // public counters = new Array<Counter>();
    counters: Counter[];
    error = '';
    sucess = '';

    // _languages = new Array<Language>();

  constructor( private _mysql:MysqlConnectionService ) { }

  ngOnInit() {

    // this._mysql.getLanguages().subscribe( res => {
    //     this._languages = res;
    //   },
    // this._mysql.getCounter().subscribe( res => {
    //     this.counters = res;
    //   },
    //   error => {
    //     console.log('an error has occurred');
    //   }
    // )

    this.getCount();

    console.log(this.counters);

  }

  getCount():void {
    this._mysql.getCounter().subscribe(
      (res:Counter[]) => {
        this.counters = res;
      },
      err => {
        this.error = err;
      }
    );
  }

}

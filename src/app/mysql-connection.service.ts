import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Counter } from './Counter';

import { Observable } from 'rxjs/Observable';


@Injectable()
export class MysqlConnectionService {

  private _url: string = "";

  constructor(private http: HttpClient) { }

  getCounter(): Observable<Counter[]>{
    return
    // this.http.get<Counter>('http:Basak.org.mx/service.php')
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Counter } from './Counter';

import { Observable } from 'rxjs/Observable';


@Injectable()

export class MysqlConnectionService {

  private _url:string = "https://basak.org.mx/service.php";

  constructor(private http: HttpClient) { }

  getCounter(): Observable<Counter[]>{
    // return this.http.get('https://jsonplaceholder.typicode.com/users')
    return this.http.get<Counter[]>(this._url);
  }

}

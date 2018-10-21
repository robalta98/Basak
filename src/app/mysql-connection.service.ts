import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Counter } from './Counter';
import { Language } from './language';

import { Observable } from 'rxjs/Observable';
import { _throw } from 'rxjs/observable/throw';
import { map, catchError } from 'rxjs/operators';


@Injectable()

export class MysqlConnectionService {

  private _url:string = "https://basak.org.mx/api";

  counters: Counter[];

  constructor(private _http: HttpClient) { }

  getCounter(): Observable<Counter[]>{
    // return this.http.get('https://jsonplaceholder.typicode.com/users')
    return this._http.get<Counter[]>(`${this._url}/list`).pipe(
      map((res) => {
        this.counters = res['data'];
        return this.counters;
      }),
      catchError(this.handleError));

  }

  // getCounter() {
  //   // return this.http.get('https://jsonplaceholder.typicode.com/users')
  //   return this._http.get<Array<Counter>>(this._url);
  // }

  getLanguages() {
        return this._http.get<Array<Language>>('https://languagetool.org/api/v2/languages');
    }

    private handleError(error: HttpErrorResponse) {
      console.log(error);

      // return an observable with a user friendly message
      return _throw('Error! something went wrong.');
    }

}

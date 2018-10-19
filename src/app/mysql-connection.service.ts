import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { Counter } from './Counter';

import { Observable } from 'rxjs/Observable';


@Injectable({
    providedIn: 'root'
})

export class MysqlConnectionService {

  constructor(private http: HttpClient) { }
  // constructor() { }

  getCounter(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

}

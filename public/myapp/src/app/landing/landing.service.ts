import { Injectable } from '@angular/core';

import { Http, Headers, Response  } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class LandingService {

  constructor( private http: HttpClient ) {}

  authLogin() {
    return this.http.get<any>('http://localhost:3000/api/auth/google');
  }
}

import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";


@Injectable()
export class LandingService {

  constructor(private http: HttpClient,
              @Inject("API_URL") private apiUrl: string) {}


  signIn(credentials: any): Observable<any> {
    return this.http
    .post(`${this.apiUrl}/auth/login`, credentials)
    .map((response: any) => response);
  }


}

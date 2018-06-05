import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";


@Injectable()
export class UserService {

  constructor(private http: HttpClient,
              @Inject("API_URL") private apiUrl: string) {}


  fetchUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile/getUserProfile`, { withCredentials: true });
  }

  signOut(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile/logout`, { withCredentials: true });
  }

}

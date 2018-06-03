import { Injectable, Inject } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs/Observable";


@Injectable()
export class UserService {

  constructor(private http: HttpClient,
              @Inject("API_URL") private apiUrl: string) {}


  fetchUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile/getUserProfile`, { withCredentials: true });
  }

  signIn(credentials: any): Observable<any> {
    return this.http
    .post(`${this.apiUrl}/auth/login`, credentials)
    .map((response: any) => response);
  }

  signOut(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile/logout`, { withCredentials: true });
  }

}

import { Injectable, Inject } from '@angular/core';

import { Http, Headers, Response, RequestOptions  } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ConfigService } from '../shared/services/config.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class LandingService {

  url: string;
  headers: any;
  constructor( private http: HttpClient,
               private configService: ConfigService,
               @Inject('API_URL') private apiUrl: string) {

                 this.url = `${apiUrl}/auth/google`;
                 this.headers = this.configService.getHeaders();

               }


}

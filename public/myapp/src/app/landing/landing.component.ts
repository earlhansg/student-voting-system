import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { Interface } from '../shared/-index';

import { LandingService } from './landing.service';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  user: any;
  apiUrl: string = `http://localhost:3000`;

  form: FormGroup;

  errorType: string;

  username   = new FormControl("", [ Validators.required ]);
  password   = new FormControl("", [ Validators.required ]);


  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private landingService: LandingService) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm(): void {
    const fields = {
      username  : this.username,
      password  : this.password
    };

    this.form = this.fb.group(fields);
  }

  signIn(evt: Event, credential: Interface.User): void {
    evt.preventDefault();

    this.landingService
      .signIn(credential)
      .subscribe(
        response => {
          const user = JSON.stringify(response);

          localStorage.setItem("user", user);
          this.router.navigate(["/dashboard"]);
        },
        err => this.errorType = err.error.replace(/['"]+/g, ""));
  }


  resetForm(): void {
    this.form.reset();
  }

}

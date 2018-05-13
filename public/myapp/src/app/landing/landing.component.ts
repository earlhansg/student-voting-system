import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { LandingService } from './landing.service';

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  apiUrl: string = `http://localhost:3000`;

  form: FormGroup;
  userID = new FormControl('',  Validators.required);

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,

              private landingService: LandingService) { }

  ngOnInit() {
    this.buildForm();
  }
  buildForm(): void {
		this.form = this.fb.group({
			'userID':   this.userID
		});
  }

}

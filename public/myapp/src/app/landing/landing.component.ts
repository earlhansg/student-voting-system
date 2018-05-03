import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LandingService } from './landing.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private landingService: LandingService) { }

  ngOnInit() {
  }

  goTO() {
    console.log('click');
    this.landingService.authLogin();
  }

}

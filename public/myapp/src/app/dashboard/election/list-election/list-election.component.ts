import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Router } from '@angular/router';

@Component({
  selector: 'app-list-election',
  templateUrl: './list-election.component.html',
  styleUrls: ['./list-election.component.css']
})
export class ListElectionComponent implements OnInit {

  constructor(private router: Router,
              private _location: Location) { }

  ngOnInit() {

  }

  goto() {
    this._location.back();
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-election',
  templateUrl: './election.component.html',
  styleUrls: ['./election.component.css']
})
export class ElectionComponent implements OnInit {

  visibility: boolean = false;
  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
  }

  addElection() {
    this.visibility = true;
  }

}

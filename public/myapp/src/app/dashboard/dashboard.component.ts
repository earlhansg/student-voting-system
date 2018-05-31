import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private dashboardService: UserService) { }

  ngOnInit() {
    const userInfo = localStorage.getItem("user");

    this.user      = JSON.parse(userInfo);
  }

  signOut(): void {
   this.dashboardService.signOut().subscribe(response => {
     localStorage.removeItem("user");
     this.router.navigate([ "/" ]);
   });
 }

}

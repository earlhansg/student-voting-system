import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";


@Component({
  selector: "passport-initialize",
  templateUrl: "./initialize.component.html",
  styleUrls: [ "./initialize.component.css" ]
})
export class InitializeComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const user = this.route.snapshot.data.user;

    localStorage.setItem("user", JSON.stringify(user));

    if (user.status_id == 1 ) {
      setTimeout(() => this.router.navigate([ "/dashboard" ]), 1000);
    }
    else
      setTimeout(() => this.router.navigate([ "/vote" ]), 1000);
  }

}

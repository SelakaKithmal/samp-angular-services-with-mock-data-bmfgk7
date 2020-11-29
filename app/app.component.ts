import { Component, OnInit } from "@angular/core";
import { servers } from "../shared/servers";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  name = "Angular 5";

  constructor(public service: servers) {}

  ngOnInit() {
    this.service.getSampleData().subscribe(data => {
      console.log(data);
    });
  }
}

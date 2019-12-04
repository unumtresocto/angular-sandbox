import { Component, OnInit } from "@angular/core";

import { GlobalLevelService } from "../services/global-level.service";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  serviceName = this.service.name;
  counter = this.service.counter;

  constructor(private readonly service: GlobalLevelService) {}

  ngOnInit() {}

  incrementCounter() {
    this.service.increment();
  }
}

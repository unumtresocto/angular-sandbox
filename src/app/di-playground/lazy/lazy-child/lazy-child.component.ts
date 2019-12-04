import { Component, OnInit } from "@angular/core";

import { GlobalLevelService } from "../../services/global-level.service";

@Component({
  selector: "app-lazy-child",
  templateUrl: "./lazy-child.component.html",
  styleUrls: ["./lazy-child.component.css"]
})
export class LazyChildComponent implements OnInit {
  serviceName = this.service.name;
  counter = this.service.counter;

  constructor(private readonly service: GlobalLevelService) {}

  ngOnInit() {}

  incrementCounter() {
    this.service.increment();
  }
}

import { Component, OnInit } from "@angular/core";

import { CounterService } from "../services/counter.service";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  serviceName = this.service.name;
  counter$ = this.service.counter$;

  constructor(private readonly service: CounterService) {}

  ngOnInit() {}

  incrementCounter() {
    this.service.increment();
  }
}

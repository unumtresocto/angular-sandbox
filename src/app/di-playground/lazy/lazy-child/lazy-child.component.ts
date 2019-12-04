import { Component, OnInit } from "@angular/core";

import { CounterService } from "../../services/counter.service";

@Component({
  selector: "app-lazy-child",
  templateUrl: "./lazy-child.component.html",
  styleUrls: ["./lazy-child.component.css"]
})
export class LazyChildComponent implements OnInit {
  serviceName = this.service.name;
  counter$ = this.service.counter$;

  constructor(private readonly service: CounterService) {}

  ngOnInit() {}

  incrementCounter() {
    this.service.increment();
  }
}

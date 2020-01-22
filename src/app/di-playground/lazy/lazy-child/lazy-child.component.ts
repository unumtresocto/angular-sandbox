import { Component, OnInit } from "@angular/core";

import { CounterService } from "../../services/counter.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-lazy-child",
  templateUrl: "./lazy-child.component.html",
  styleUrls: ["./lazy-child.component.css"]
})
export class LazyChildComponent implements OnInit {
  serviceName = this.service.name;
  counter$ = this.service.counter$;

  constructor(
    private readonly service: CounterService,
    private readonly httpClient: HttpClient
  ) {}

  ngOnInit() {}

  incrementCounter() {
    this.service.increment();
  }

  getSomething() {
    this.httpClient
      .get("something/very/important")
      .subscribe(data => console.log(data));
  }
}

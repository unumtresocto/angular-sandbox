import { Component, OnInit } from "@angular/core";

import { LazyLoadSchedulerService } from "./services/lazy-load-scheduler.service";

@Component({
  selector: "app-di-playground",
  templateUrl: "./di-playground.component.html",
  styleUrls: ["./di-playground.component.css"]
})
export class DiPlaygroundComponent implements OnInit {
  constructor(private readonly lazyScheduler: LazyLoadSchedulerService) {}

  ngOnInit(): void {}

  loadModule() {
    this.lazyScheduler.allowLoad();
  }
}

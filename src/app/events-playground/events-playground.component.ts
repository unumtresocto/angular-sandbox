import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-events-playground",
  templateUrl: "./events-playground.component.html",
  styleUrls: ["./events-playground.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsPlaygroundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleClick($event: any): void {
    // console.dir($event);
  }
}

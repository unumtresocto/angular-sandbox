import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-box-projector",
  templateUrl: "./box-projector.component.html",
  styleUrls: ["./box-projector.component.css"]
})
export class BoxProjectorComponent implements OnInit {
  @Input() showBoxes: boolean;

  constructor() {}

  ngOnInit() {}
}

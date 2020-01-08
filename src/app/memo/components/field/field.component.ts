import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-field",
  templateUrl: "./field.component.html",
  styleUrls: ["./field.component.css"]
})
export class FieldComponent implements OnInit {
  size = 3;
  cards = new Array(this.size * this.size);

  constructor() {}

  ngOnInit() {}
}

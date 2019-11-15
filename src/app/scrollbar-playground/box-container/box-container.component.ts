import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-box-container",
  templateUrl: "./box-container.component.html",
  styleUrls: ["./box-container.component.css"]
})
export class BoxContainerComponent implements OnInit {
  showContent = false;

  @Input() state: boolean;

  constructor() {}

  ngOnInit() {}

  toggleHiddenContent() {
    this.showContent = !this.showContent;
  }
}

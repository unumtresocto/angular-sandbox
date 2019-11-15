import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "app-scrollbar-playground",
  templateUrl: "./scrollbar-playground.component.html",
  styleUrls: ["./scrollbar-playground.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollbarPlaygroundComponent implements OnInit {
  showContent = false;

  constructor() {}

  ngOnInit() {}

  toggleHiddenContent() {
    this.showContent = !this.showContent;
  }
}

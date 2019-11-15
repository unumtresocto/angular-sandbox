import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  Component,
  ViewContainerRef
} from "@angular/core";

@Component({
  selector: "app-dynamic",
  templateUrl: "./dynamic.component.html",
  styleUrls: ["./dynamic.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicComponent implements AfterViewChecked {
  constructor(private readonly vcr: ViewContainerRef) {}

  ngAfterViewChecked() {
    console.log("Dynamic checked");
  }
}

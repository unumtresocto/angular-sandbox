import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ViewContainerRef
} from "@angular/core";

@Component({
  selector: "app-cd-debug",
  templateUrl: "./cd-debug.component.html",
  styleUrls: ["./cd-debug.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdDebugComponent implements AfterViewChecked {
  constructor(
    private readonly vcr: ViewContainerRef,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngAfterViewChecked(): void {
    console.dir(this);

    console.log("CD Debug checked");
  }
}

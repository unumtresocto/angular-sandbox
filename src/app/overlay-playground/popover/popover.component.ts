import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  OnDestroy,
  OnInit
} from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-popover",
  templateUrl: "./popover.component.html",
  styleUrls: ["./popover.component.css"]
})
export class PopoverComponent implements OnInit, OnDestroy {
  clickedOutside = new EventEmitter<void>();
  listener = event => {
    this.documentClickHandler(event);
  };

  constructor(
    @Inject(DOCUMENT)
    private readonly document: Document,
    private readonly elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.document.addEventListener("click", this.listener, true);
  }

  ngOnDestroy(): void {
    this.document.removeEventListener("click", this.listener);
  }

  documentClickHandler(event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.clickedOutside.emit();
    }
  }
}

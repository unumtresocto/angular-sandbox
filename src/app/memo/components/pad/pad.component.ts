import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  Renderer2
} from "@angular/core";

@Component({
  selector: "app-pad",
  templateUrl: "./pad.component.html",
  styleUrls: ["./pad.component.css"]
})
export class PadComponent {
  @Output() click = new EventEmitter();

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  @HostListener("click")
  onClick(): void {
    this.click.emit();

    this.tap();
  }

  tap(): void {
    const el = this.elementRef.nativeElement;

    this.renderer.addClass(el, "active");

    setTimeout(() => {
      this.renderer.removeClass(el, "active");
    }, 200);
  }
}

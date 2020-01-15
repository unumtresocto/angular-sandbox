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
  @Output()
  padClick = new EventEmitter<PadComponent>();

  constructor(
    private readonly elementRef: ElementRef,
    private readonly renderer: Renderer2
  ) {}

  @HostListener("click")
  handleClick(): void {
    this.padClick.emit(this);
  }

  tap(color: string = "#ff0000"): void {
    const el = this.elementRef.nativeElement;

    this.renderer.setStyle(el, "border-color", color);

    setTimeout(() => {
      this.renderer.setStyle(el, "border-color", "#ffffff");
    }, 200);
  }
}

import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  OnInit,
  ViewContainerRef
} from "@angular/core";
import {
  ConnectedPosition,
  FlexibleConnectedPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayRef,
  PositionStrategy
} from "@angular/cdk/overlay";
import { ESCAPE, UP_ARROW } from "@angular/cdk/keycodes";
import { ComponentPortal } from "@angular/cdk/portal";
import { PopoverComponent } from "./popover/popover.component";
import { take } from "rxjs/operators";

@Component({
  selector: "app-overlay-playground",
  templateUrl: "./overlay-playground.component.html",
  styleUrls: ["./overlay-playground.component.css"]
})
export class OverlayPlaygroundComponent implements OnInit {
  private overlayRef: OverlayRef | null;
  private portal: ComponentPortal<PopoverComponent>;
  private positionStrategy: FlexibleConnectedPositionStrategy;
  private popoverRef: ComponentRef<PopoverComponent>;

  constructor(
    private readonly overlay: Overlay,
    private readonly vcr: ViewContainerRef,
    private readonly cfr: ComponentFactoryResolver,
    private readonly injector: Injector
  ) {}

  ngOnInit() {}

  showPopover(anchor: HTMLElement) {
    let overlayRef = this.overlayRef;

    if (!overlayRef) {
      this.portal = new ComponentPortal<PopoverComponent>(
        PopoverComponent,
        this.vcr,
        this.injector,
        this.cfr
      );

      overlayRef = this.overlay.create(this.getOverlayConfig(anchor));

      this.overlayRef = overlayRef;

      overlayRef.keydownEvents().subscribe(event => {
        if (
          event.keyCode === ESCAPE ||
          (event.keyCode === UP_ARROW && event.altKey)
        ) {
          event.stopPropagation();
          event.preventDefault();

          this.destroyPopover();
        }
      });
    }

    if (overlayRef && !overlayRef.hasAttached()) {
      this.popoverRef = overlayRef.attach(this.portal);
    }

    this.popoverRef.instance.clickedOutside.pipe(take(1)).subscribe(() => {
      this.destroyPopover();
    });
  }

  private getOverlayConfig(anchor: HTMLElement): OverlayConfig {
    return new OverlayConfig({
      positionStrategy: this.getOverlayPosition(anchor),
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      width: undefined,
      direction: undefined
    });
  }

  private getOverlayPosition(anchor: HTMLElement): PositionStrategy {
    const strategy = this.overlay
      .position()
      .flexibleConnectedTo(anchor)
      .withFlexibleDimensions(false)
      .withPush(false);

    this.setStrategyPositions(strategy);
    this.positionStrategy = strategy;

    return strategy;
  }

  private setStrategyPositions(strategy: FlexibleConnectedPositionStrategy) {
    const belowPosition: ConnectedPosition = {
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top"
    };
    const abovePosition: ConnectedPosition = {
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "bottom",

      // The overlay edge connected to the trigger should have squared corners, while
      // the opposite end has rounded corners. We apply a CSS class to swap the
      // border-radius based on the overlay position.
      panelClass: "mat-autocomplete-panel-above"
    };

    let positions: ConnectedPosition[];

    positions = [belowPosition, abovePosition];

    strategy.withPositions(positions);
  }

  private destroyPopover() {
    this.overlayRef.detach();
    this.popoverRef = null;
  }
}

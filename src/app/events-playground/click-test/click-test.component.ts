import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Output,
  ViewContainerRef, ViewRef
} from "@angular/core";
import { DynamicComponent } from "../dynamic/dynamic.component";

@Component({
  selector: "app-click-test",
  templateUrl: "./click-test.component.html",
  styleUrls: ["./click-test.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClickTestComponent {
  private dynamicInstanceRef: ComponentRef<DynamicComponent>;

  @Output() myClick = new EventEmitter<string>();

  constructor(
    private readonly vcr: ViewContainerRef,
    private readonly cfr: ComponentFactoryResolver
  ) {}

  handleClick() {
    if (!this.dynamicInstanceRef) {
      this.dynamicInstanceRef = this.vcr.createComponent(
        this.cfr.resolveComponentFactory(DynamicComponent)
      );
    } else {
      (this.dynamicInstanceRef as any)._view.nodes[0].componentView.nodes[1].instance.cdr.markForCheck();
    }
    this.myClick.emit("Angular event");
  }
}

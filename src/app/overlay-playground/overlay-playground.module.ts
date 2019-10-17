import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OverlayModule } from "@angular/cdk/overlay";

import { OverlayPlaygroundRoutingModule } from "./overlay-playground-routing.module";
import { OverlayPlaygroundComponent } from "./overlay-playground.component";
import { PopoverComponent } from "./popover/popover.component";

@NgModule({
  declarations: [OverlayPlaygroundComponent, PopoverComponent],
  imports: [CommonModule, OverlayPlaygroundRoutingModule, OverlayModule],
  entryComponents: [PopoverComponent]
})
export class OverlayPlaygroundModule {}

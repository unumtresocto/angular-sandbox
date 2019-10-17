import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClickOutsidePlaygroundRoutingModule } from "./click-outside-playground-routing.module";
import { ClickOutsidePlaygroundComponent } from "./click-outside-playground.component";

@NgModule({
  declarations: [ClickOutsidePlaygroundComponent],
  imports: [CommonModule, ClickOutsidePlaygroundRoutingModule]
})
export class ClickOutsidePlaygroundModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LazyChildComponent } from "./lazy-child/lazy-child.component";
import { LazyRoutingModule } from "./lazy-routing.module";

@NgModule({
  declarations: [LazyChildComponent],
  imports: [CommonModule, LazyRoutingModule]
})
export class LazyModule {}

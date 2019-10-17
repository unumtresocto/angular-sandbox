import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DiPlaygroundRoutingModule } from "./di-playground-routing.module";
import { DiPlaygroundComponent } from "./di-playground.component";

@NgModule({
  declarations: [DiPlaygroundComponent],
  imports: [CommonModule, DiPlaygroundRoutingModule]
})
export class DiPlaygroundModule {}

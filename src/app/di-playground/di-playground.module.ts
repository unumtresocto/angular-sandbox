import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DiPlaygroundRoutingModule } from "./di-playground-routing.module";
import { DiPlaygroundComponent } from "./di-playground.component";
import { ChildComponent } from "./child/child.component";
import { CardComponent } from "./components/card/card.component";

@NgModule({
  declarations: [DiPlaygroundComponent, ChildComponent, CardComponent],
  imports: [CommonModule, DiPlaygroundRoutingModule]
})
export class DiPlaygroundModule {}

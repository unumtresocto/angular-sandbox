import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MemoComponent } from "./memo.component";
import { MemoRoutingModule } from "./memo-routing.module";
import { PadComponent } from "./components/pad/pad.component";
import { FieldComponent } from "./components/field/field.component";
import { MemoGameDirective } from './directives/memo-game.directive';

@NgModule({
  declarations: [MemoComponent, PadComponent, FieldComponent, MemoGameDirective],
  imports: [CommonModule, MemoRoutingModule]
})
export class MemoModule {}

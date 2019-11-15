import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ScrollbarPlaygroundComponent } from "./scrollbar-playground.component";
import { ScrollbarPlaygroundRoutingModule } from "./scrollbar-playground-routing.module";
import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarModule
} from "ngx-perfect-scrollbar";
import { BoxContainerComponent } from "./box-container/box-container.component";
import { BoxProjectorComponent } from './box-projector/box-projector.component';

@NgModule({
  declarations: [ScrollbarPlaygroundComponent, BoxContainerComponent, BoxProjectorComponent],
  imports: [
    CommonModule,
    ScrollbarPlaygroundRoutingModule,
    PerfectScrollbarModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: {}
    }
  ]
})
export class ScrollbarPlaygroundModule {}

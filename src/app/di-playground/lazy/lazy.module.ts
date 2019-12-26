import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LazyChildComponent } from "./lazy-child/lazy-child.component";
import { LazyRoutingModule } from "./lazy-routing.module";
import { LazyContainerComponent } from "./lazy-container/lazy-container.component";
import { DiSharedModule } from "../di-shared/di-shared.module";
import { LazyCounterService } from "../services/lazy-counter.service";
import { CounterService } from "../services/counter.service";
import { CARD_CONFIG_TOKEN } from "../di-shared/card-config";

@NgModule({
  declarations: [LazyChildComponent, LazyContainerComponent],
  imports: [CommonModule, DiSharedModule, LazyRoutingModule],
  providers: [
    LazyCounterService,
    {
      provide: CounterService,
      useExisting: LazyCounterService
    },
    {
      provide: CARD_CONFIG_TOKEN,
      useValue: {
        title: "Lazy Card"
      }
    }
  ]
})
export class LazyModule {}

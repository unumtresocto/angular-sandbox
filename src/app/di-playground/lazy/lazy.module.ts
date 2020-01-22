import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

import { LazyChildComponent } from "./lazy-child/lazy-child.component";
import { LazyRoutingModule } from "./lazy-routing.module";
import { LazyContainerComponent } from "./lazy-container/lazy-container.component";
import { DiSharedModule } from "../di-shared/di-shared.module";
import { LazyCounterService } from "../services/lazy-counter.service";
import { CounterService } from "../services/counter.service";
import { CARD_CONFIG_TOKEN } from "../di-shared/card-config";
import { httpInterceptorProviders } from "./interceptors/interceptors";
import { LazyIsolatedService } from "./interceptors/lazy-isolated.service";

@NgModule({
  declarations: [LazyChildComponent, LazyContainerComponent],
  imports: [CommonModule, DiSharedModule, LazyRoutingModule, HttpClientModule],
  providers: [
    LazyCounterService,
    LazyIsolatedService,
    httpInterceptorProviders,
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

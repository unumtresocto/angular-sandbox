import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EagerComponent } from "./eager.component";
import { EagerRoutingModule } from "./eager-routing.module";
import { httpInterceptorProviders } from "./interceptors/interceptors";

@NgModule({
  declarations: [EagerComponent],
  imports: [CommonModule, EagerRoutingModule],
  providers: [httpInterceptorProviders]
})
export class EagerModule {}

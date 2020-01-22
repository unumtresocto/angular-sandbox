import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PATHS } from "../shared/constants/paths";
import { EagerComponent } from "./eager.component";

const routes = [{ path: PATHS.eager, component: EagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EagerRoutingModule {}

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { OverlayPlaygroundComponent } from "./overlay-playground.component";
import { PATHS } from "../shared/constants/paths";

const routes = [{ path: PATHS.overlay, component: OverlayPlaygroundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OverlayPlaygroundRoutingModule {}

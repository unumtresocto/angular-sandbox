import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { DiPlaygroundComponent } from "./di-playground.component";
import { PATHS } from "../shared/constants/paths";

const routes = [{ path: PATHS.DI, component: DiPlaygroundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiPlaygroundRoutingModule {}

import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ClickOutsidePlaygroundComponent } from "./click-outside-playground.component";
import { PATHS } from "../shared/constants/paths";

const routes = [
  { path: PATHS.clickOutside, component: ClickOutsidePlaygroundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClickOutsidePlaygroundRoutingModule {}

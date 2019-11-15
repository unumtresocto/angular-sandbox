import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ScrollbarPlaygroundComponent } from "./scrollbar-playground.component";
import { PATHS } from "../shared/constants/paths";

const routes = [
  { path: PATHS.scrollbar, component: ScrollbarPlaygroundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrollbarPlaygroundRoutingModule {}

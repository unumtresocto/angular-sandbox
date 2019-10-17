import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ViewChildComponent } from "./view-child.component";
import { PATHS } from "../shared/constants/paths";

const routes = [{ path: PATHS.viewChild, component: ViewChildComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewChildRoutingModule {}

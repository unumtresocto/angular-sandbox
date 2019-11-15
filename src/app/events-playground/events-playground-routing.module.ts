import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PATHS } from "../shared/constants/paths";
import { EventsPlaygroundComponent } from "./events-playground.component";

const routes = [{ path: PATHS.events, component: EventsPlaygroundComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsPlaygroundRoutingModule {}

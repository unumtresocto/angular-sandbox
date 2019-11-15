import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EventsPlaygroundComponent } from "./events-playground.component";
import { EventsPlaygroundRoutingModule } from "./events-playground-routing.module";
import { ClickTestComponent } from "./click-test/click-test.component";
import { DynamicComponent } from "./dynamic/dynamic.component";
import { CdDebugComponent } from "./cd-debug/cd-debug.component";

@NgModule({
  declarations: [
    EventsPlaygroundComponent,
    ClickTestComponent,
    DynamicComponent,
    CdDebugComponent
  ],
  imports: [CommonModule, EventsPlaygroundRoutingModule],
  entryComponents: [DynamicComponent]
})
export class EventsPlaygroundModule {}

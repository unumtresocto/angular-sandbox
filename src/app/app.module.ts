import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { ViewChildModule } from "./view-child/view-child.module";
import { DiPlaygroundModule } from "./di-playground/di-playground.module";
import { ClickOutsidePlaygroundModule } from "./click-outside-playground/click-outside-playground.module";
import { OverlayPlaygroundModule } from "./overlay-playground/overlay-playground.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    ViewChildModule,
    DiPlaygroundModule,
    ClickOutsidePlaygroundModule,
    OverlayPlaygroundModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ViewChildComponent } from "./view-child.component";
import { ChildSelectorDirective } from "./directives/child-selector.directive";
import { TocComponent } from "./toc/toc.component";
import { ViewChildRoutingModule } from "./view-child-routing.module";
import { ViewChildServicesModule } from "./view-child-services.module";

@NgModule({
  declarations: [ViewChildComponent, ChildSelectorDirective, TocComponent],
  imports: [CommonModule, ViewChildRoutingModule, ViewChildServicesModule]
})
export class ViewChildModule {}

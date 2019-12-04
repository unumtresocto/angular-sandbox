import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LazyContainerComponent } from "./lazy-container/lazy-container.component";

const routes = [{ path: "", component: LazyContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {}

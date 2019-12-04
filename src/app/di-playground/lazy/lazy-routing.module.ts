import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { LazyChildComponent } from "./lazy-child/lazy-child.component";

const routes = [{ path: "", component: LazyChildComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {}

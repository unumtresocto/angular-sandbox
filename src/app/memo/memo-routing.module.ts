import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PATHS } from "../shared/constants/paths";
import { MemoComponent } from "./memo.component";

const routes = [{ path: PATHS.memo, component: MemoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemoRoutingModule {}

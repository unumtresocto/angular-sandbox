import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { PATHS } from "../shared/constants/paths";
import { DiPlaygroundComponent } from "./di-playground.component";

const routes = [
  {
    path: PATHS.DI,
    component: DiPlaygroundComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        loadChildren: () =>
          import("./lazy/lazy.module").then(mod => {
            return mod.LazyModule;
          })
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiPlaygroundRoutingModule {}

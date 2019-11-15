import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PATHS } from "./shared/constants/paths";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: PATHS.viewChild },
  { path: "**", redirectTo: "" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

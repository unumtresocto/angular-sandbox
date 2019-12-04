import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DiPlaygroundRoutingModule } from "./di-playground-routing.module";
import { DiPlaygroundComponent } from "./di-playground.component";
import { ChildComponent } from "./child/child.component";
import { ReplaceCounterDirective } from "./directives/replace-counter.directive";
import { ReplaceWithGlobalCounterDirective } from "./directives/replace-with-global-counter.directive";
import { ReplaceWithBrokenDirective } from "./directives/replace-with-broken.directive";
import { DiSharedModule } from "./di-shared/di-shared.module";
import { CustomCardConfigDirective } from './directives/custom-card-config.directive';

@NgModule({
  declarations: [
    DiPlaygroundComponent,
    ChildComponent,
    ReplaceCounterDirective,
    ReplaceWithGlobalCounterDirective,
    ReplaceWithBrokenDirective,
    CustomCardConfigDirective
  ],
  imports: [CommonModule, DiPlaygroundRoutingModule, DiSharedModule]
})
export class DiPlaygroundModule {}

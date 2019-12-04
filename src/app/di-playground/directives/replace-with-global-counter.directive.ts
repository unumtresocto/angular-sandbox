import { Directive } from "@angular/core";
import { CounterService } from "../services/counter.service";
import { OneMoreCounterService } from "../services/one-more-counter.service";

@Directive({
  selector: "[appReplaceWithGlobalCounter]",
  providers: [{
    provide: CounterService,
    useExisting: OneMoreCounterService,
  }]
})
export class ReplaceWithGlobalCounterDirective {
  constructor() {}
}

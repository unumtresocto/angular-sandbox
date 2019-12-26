import { Directive } from "@angular/core";

import { CounterService } from "../services/counter.service";
import { AnotherCounterService } from "../services/another-counter.service";

@Directive({
  selector: "[appReplaceCounter]",
  providers: [{
    provide: CounterService,
    useClass: AnotherCounterService
  }]
})
export class ReplaceCounterDirective {
  constructor() {}
}

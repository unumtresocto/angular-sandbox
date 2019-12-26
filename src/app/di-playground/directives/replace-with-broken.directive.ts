import { Directive } from "@angular/core";
import { of } from "rxjs";

import { CounterService } from "../services/counter.service";

@Directive({
  selector: "[appReplaceWithBroken]",

  providers: [
    {
      provide: CounterService,
      useValue: {
        counter$: of("I'm broken"),
        name: "Broken counter",
        increment() {
          alert("Seriously, I'm dead...");
        }
      }
    }
  ]
})
export class ReplaceWithBrokenDirective {
  constructor() {}
}

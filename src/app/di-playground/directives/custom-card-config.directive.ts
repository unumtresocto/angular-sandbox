import { Directive } from "@angular/core";
import { CARD_CONFIG_TOKEN } from "../di-shared/card-config";

@Directive({
  selector: "[appCustomCardConfig]",
  providers: [
    { provide: CARD_CONFIG_TOKEN, useValue: { title: "Customized Card" } }
  ]
})
export class CustomCardConfigDirective {
  constructor() {}
}

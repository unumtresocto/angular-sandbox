import { Directive } from "@angular/core";

@Directive({
  selector: "[appChildSelector]"
})
export class ChildSelectorDirective {
  constructor() {}
}

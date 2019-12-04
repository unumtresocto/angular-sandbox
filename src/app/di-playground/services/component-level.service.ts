import { Injectable, OnDestroy } from "@angular/core";

@Injectable()
export class ComponentLevelService implements OnDestroy {
  name = "Component Service";

  constructor() {}

  greet(): void {
    console.log(this.name);
  }

  ngOnDestroy(): void {
    debugger;
    console.log(`${this.name}: bye-bye...`);
  }
}

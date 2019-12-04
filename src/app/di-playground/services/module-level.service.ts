import { Injectable } from "@angular/core";

@Injectable()
export class ModuleLevelService {
  name = "Module Service";

  constructor() {}

  greet(): void {
    console.log(this.name);
  }
}

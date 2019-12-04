import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class LazyCounterService {
  // tslint:disable-next-line:variable-name
  private _counter$ = new BehaviorSubject(0);

  get counter$() {
    return this._counter$.asObservable();
  }

  name = "Lazy Counter";

  constructor() {}

  greet(): void {
    console.log(this.name);
  }

  increment(): void {
    this._counter$.next(this._counter$.value + 3);
  }
}

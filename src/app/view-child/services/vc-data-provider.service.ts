import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class VcDataProviderService {
  data$ = new BehaviorSubject<boolean>(false);

  constructor() {}

  loadData(): void {
    setTimeout(() => {
      this.data$.next(true);
    }, 500);
  }
}

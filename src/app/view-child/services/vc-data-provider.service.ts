import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { ViewChildServicesModule } from "../view-child-services.module";


@Injectable({
  providedIn: ViewChildServicesModule
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

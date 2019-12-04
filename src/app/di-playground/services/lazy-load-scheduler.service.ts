import { Injectable } from "@angular/core";
import { CanLoad } from "@angular/router";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LazyLoadSchedulerService implements CanLoad {
  private canLoad$ = new Subject<boolean>();

  constructor() {}

  allowLoad(): void {
    this.canLoad$.next(true);
  }

  canLoad(): Observable<boolean> {
    return this.canLoad$.asObservable();
  }
}

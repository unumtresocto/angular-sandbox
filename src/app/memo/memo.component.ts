import { Component, OnInit, ViewChild } from "@angular/core";
import { FieldComponent } from "./components/field/field.component";
import { MenuComponent } from "./components/menu/menu.component";
import { MemoEngineService } from "./services/memo-engine.service";
import {
  distinctUntilChanged,
  filter,
  finalize,
  map,
  pluck,
  shareReplay,
  switchMap,
  take,
  tap,
  withLatestFrom
} from "rxjs/operators";
import { BehaviorSubject, from, interval, zip } from "rxjs";

@Component({
  selector: "app-memo",
  templateUrl: "./memo.component.html",
  styleUrls: ["./memo.component.css"],
  providers: [MemoEngineService]
})
export class MemoComponent implements OnInit {
  @ViewChild(FieldComponent, { static: true })
  field: FieldComponent;

  @ViewChild(MenuComponent, { static: true })
  menu: MenuComponent;

  fieldLocked$ = new BehaviorSubject<boolean>(true);

  constructor(private readonly memoEngine: MemoEngineService) {}

  ngOnInit(): void {
    const padClicks$ = this.field.padClicks$.pipe(
      withLatestFrom(this.fieldLocked$),
      filter(([_, isFieldLocked]) => {
        return !isFieldLocked;
      }),
      map(([padClick, _]) => padClick),
      tap(({ pad }) => {
        pad.tap("#00ffff");
      }),
      pluck("index")
    );

    const newGame$ = this.menu.newGame$.pipe(
      tap(() => {
        this.fieldLocked$.next(false);
      })
    );

    const state$ = this.memoEngine
      .initializeGame(padClicks$, newGame$)
      .pipe(shareReplay(1));

    state$
      .pipe(
        pluck("pattern"),
        distinctUntilChanged(),
        tap(() => this.fieldLocked$.next(true)),
        switchMap(pattern => {
          const length = pattern.length;

          return zip(from(pattern), interval(500).pipe(take(length))).pipe(
            pluck("0"),
            tap(index => this.field.pads[index].tap("#ffff00")),
            finalize(() => {
              this.fieldLocked$.next(false);
            })
          );
        })
      )
      .subscribe(() => {});

    state$
      .pipe(
        pluck("isOver"),
        filter(state => !!state)
      )
      .subscribe(() => {
        this.fieldLocked$.next(true);
      });

    state$.subscribe(() => {});
  }
}

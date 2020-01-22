import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map, mergeScan, startWith, switchMap } from "rxjs/operators";

export interface MemoGameState {
  round: number;
  isOver: boolean;
  lives: number;
  pattern: number[];
  userPattern: number[];
}

const INITIAL_STATE: MemoGameState = {
  round: 0,
  isOver: false,
  lives: 3,
  pattern: [],
  userPattern: []
};

@Injectable({
  providedIn: "root"
})
export class MemoEngineService {
  fieldSize = 9;

  constructor() {}

  initializeGame(
    padClicks$: Observable<number>,
    newGameTrigger$: Observable<void>
  ): Observable<MemoGameState> {
    return newGameTrigger$.pipe(
      switchMap(() => {
        const state = this.initNewRound(INITIAL_STATE, 1);

        return padClicks$.pipe(
          mergeScan((currState: MemoGameState, clickedPad: number) => {
            return of(currState).pipe(
              map(this.handlePadClick.bind(this, clickedPad)),
              map(this.checkGameOver.bind(this)),
              map(this.checkNewRound.bind(this))
            );
          }, state),
          startWith(state)
        );
      })
    );
  }

  private initNewRound(state: MemoGameState, round: number): MemoGameState {
    const pattern = new Array(round).fill(null).map(() => {
      return Math.floor(Math.random() * this.fieldSize);
    });

    return {
      ...state,
      pattern,
      round,
      userPattern: []
    };
  }

  private handlePadClick(
    clickedPad: number,
    state: MemoGameState
  ): MemoGameState {
    return { ...state, userPattern: [...state.userPattern, clickedPad] };
  }

  private checkGameOver(state: MemoGameState): MemoGameState {
    return this.validatePattern(state.pattern, state.userPattern)
      ? state
      : {
          ...state,
          isOver: true
        };
  }

  private checkNewRound(state: MemoGameState): MemoGameState {
    return state.pattern.length === state.userPattern.length
      ? this.initNewRound(state, state.round + 1)
      : state;
  }

  private validatePattern(pattern: number[], userPattern: number[]): boolean {
    return userPattern.reduce((acc, val, index) => {
      return acc && pattern[index] === val;
    }, true);
  }
}

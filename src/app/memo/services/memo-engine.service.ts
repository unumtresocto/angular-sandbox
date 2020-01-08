import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { map, switchMap } from "rxjs/operators";

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
      map(() => {
        return this.initNewRound(INITIAL_STATE, 1);
      }),
      switchMap(state => {
        return padClicks$.pipe(
          map(clickedPad => {
            return this.handlePadClick(state, clickedPad);
          })
        );
      }),
      map(this.checkGameOver),
      map(this.checkNewRound)
    );
  }

  initNewRound(state: MemoGameState, round: number): MemoGameState {
    const pattern = new Array(round).map(() => {
      return Math.round(Math.random() * this.fieldSize);
    });

    return {
      ...state,
      pattern,
      round,
      userPattern: []
    };
  }

  private handlePadClick(
    state: MemoGameState,
    clickedPad: number
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

  private checkNewRound(state: MemoGameState) {
    return state.pattern.length === state.userPattern.length
      ? this.initNewRound(state, state.round + 1)
      : state;
  }

  validatePattern(pattern, userPattern): boolean {
    return userPattern.reduce((acc, val, index) => {
      return acc && pattern[index] === val;
    }, true);
  }
}

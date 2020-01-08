import { EventEmitter } from "@angular/core";

export interface Pad {
  click: EventEmitter<number>;
}

export interface GameField {
  pads: Pad[];
}

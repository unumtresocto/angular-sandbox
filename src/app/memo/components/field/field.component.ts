import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  QueryList,
  ViewChildren
} from "@angular/core";
import { Observable } from "rxjs";

import { PadComponent } from "../pad/pad.component";

@Component({
  selector: "app-field",
  templateUrl: "./field.component.html",
  styleUrls: ["./field.component.css"]
})
export class FieldComponent implements AfterViewInit {
  size = 3;
  cards = new Array(this.size * this.size);
  padClicks = new EventEmitter<{ pad: PadComponent; index: number }>();

  @ViewChildren(PadComponent)
  // tslint:disable-next-line:variable-name
  private _pads: QueryList<PadComponent>;

  pads: PadComponent[];

  get padClicks$(): Observable<{ pad: PadComponent; index: number }> {
    return this.padClicks.asObservable();
  }

  ngAfterViewInit(): void {
    this.pads = this._pads.map(pad => pad);
  }

  handleClick(pad: PadComponent, index: number) {
    this.padClicks.emit({ pad, index });
  }
}

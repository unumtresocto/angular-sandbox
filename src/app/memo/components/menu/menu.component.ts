import { Component, EventEmitter, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.css"]
})
export class MenuComponent implements OnInit {
  newGame = new EventEmitter<void>();

  get newGame$(): Observable<void> {
    return this.newGame.asObservable();
  }

  constructor() {}

  ngOnInit() {}

  handleNewGame() {
    this.newGame.emit();
  }
}

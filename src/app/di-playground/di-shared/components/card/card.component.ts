import { Component, Inject, OnInit, Optional } from "@angular/core";

import { CARD_CONFIG_TOKEN, CardConfig } from "../../card-config";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"]
})
export class CardComponent implements OnInit {
  name: string;

  constructor(
    @Inject(CARD_CONFIG_TOKEN) @Optional() private readonly config: CardConfig
  ) {}

  ngOnInit(): void {
    this.name = this.config ? this.config.title : "No Config Card";
  }
}

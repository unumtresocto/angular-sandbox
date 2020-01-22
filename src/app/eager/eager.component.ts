import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-eager",
  templateUrl: "./eager.component.html",
  styleUrls: ["./eager.component.css"]
})
export class EagerComponent {
  constructor(private readonly httpClient: HttpClient) {}

  getSomething(): void {
    this.httpClient.get("assets/config.json").subscribe((data) => { console.log(data) });
  }
}

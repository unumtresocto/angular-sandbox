import { Component } from "@angular/core";
import { PATHS } from "../constants/paths";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"]
})
export class NavigationComponent {
  links: { path: string; title: string }[] = [
    {
      path: PATHS.viewChild,
      title: "View Child PG"
    },
    {
      path: PATHS.DI,
      title: "DI PG"
    },
    {
      path: PATHS.clickOutside,
      title: "Click Outside PG"
    },
    {
      path: PATHS.overlay,
      title: "Overlay PG"
    },
    {
      path: PATHS.scrollbar,
      title: "Scrollbar PG"
    },
    {
      path: PATHS.events,
      title: "Events PG"
    },
    {
      path: PATHS.memo,
      title: "Memo Game"
    }
  ];
}

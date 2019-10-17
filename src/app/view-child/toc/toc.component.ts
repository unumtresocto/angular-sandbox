import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit
} from "@angular/core";

export interface TOCItem {
  name: string;
  element: HTMLElement;
}

@Component({
  selector: "app-toc",
  templateUrl: "./toc.component.html",
  styleUrls: ["./toc.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TocComponent implements OnInit {
  @Input() TOCItems: TOCItem[];

  constructor() {}

  ngOnInit() {}

  onItemClick(element: HTMLElement): void {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

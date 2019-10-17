import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren
} from "@angular/core";
import { Observable, Subscription } from "rxjs";

import { ChildSelectorDirective } from "./directives/child-selector.directive";
import { VcDataProviderService } from "./services/vc-data-provider.service";
import { TOCItem } from "./toc/toc.component";
import { distinctUntilChanged, startWith } from "rxjs/operators";

@Component({
  selector: "app-view-child",
  templateUrl: "./view-child.component.html",
  styleUrls: ["./view-child.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewChildComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChildren(ChildSelectorDirective, { read: ElementRef })
  sections: QueryList<ElementRef>;

  tocItems: TOCItem[] = [];
  sectionsChangesSub: Subscription;

  dataReady$: Observable<boolean>;

  constructor(
    private readonly vcDataProvider: VcDataProviderService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dataReady$ = this.vcDataProvider.data$.pipe(distinctUntilChanged());

    this.vcDataProvider.loadData();
  }

  ngAfterViewInit(): void {
    this.sectionsChangesSub = this.sections.changes
      .pipe(startWith(null))
      .subscribe(() => {
        this.extractTOCs();
      });
  }

  ngOnDestroy(): void {
    this.sectionsChangesSub.unsubscribe();
  }

  private extractTOCs() {
    this.tocItems = this.sections.map(elRef => {
      return {
        element: elRef.nativeElement,
        name: elRef.nativeElement.innerHTML
          .split(" ")
          .map(word => word[0])
          .join("")
      };
    });

    this.cdr.detectChanges();
  }
}

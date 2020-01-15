import { AfterViewInit, Directive } from "@angular/core";
import { FieldComponent } from "../components/field/field.component";
import { MemoEngineService } from "../services/memo-engine.service";

@Directive({
  selector: "[appMemoGame]",
  providers: [MemoEngineService]
})
export class MemoGameDirective implements AfterViewInit{
  constructor(
    private readonly field: FieldComponent,
    private readonly memoEngine: MemoEngineService
  ) {}

  ngAfterViewInit(): void {
  }
}

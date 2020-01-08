import { Directive, Host } from '@angular/core';

@Directive({
  selector: '[appMemoGame]'
})
export class MemoGameDirective {

  constructor(
    private readonly host: Host
  ) { }

}

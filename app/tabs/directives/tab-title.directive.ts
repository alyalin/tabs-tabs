import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "tab-title"
})
export class TabTitle {
  constructor(public elementRef: ElementRef) {}
}

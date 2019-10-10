import { Directive, ElementRef } from "@angular/core";

@Directive({
  selector: "tab-content"
})
export class TabContent {
  constructor(public elementRef: ElementRef) {}
}

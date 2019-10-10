import { Directive, ContentChild } from "@angular/core";
import { TabIdService } from "../services/tab-id.service";
import { TabTitle } from "./tab-title.directive.ts";
import { TabContent } from "./tab-content.directive.ts";

@Directive({
  selector: "tab"
})
export class Tab {
  constructor(private tabIdService: TabIdService) {}

  tabId = this.tabIdService.generate;

  @ContentChild(TabTitle, { static: true }) titleTpl: TabTitle;
  @ContentChild(TabContent, { static: true }) contentTpl: TabContent;
}

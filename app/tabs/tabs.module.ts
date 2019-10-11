import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TabsComponent } from "./component/tabs.component";
import { TabContent } from "./directives/tab-content.directive";
import { Tab } from "./directives/tab.directive";
import { TabTitle } from "./directives/tab-title.directive";

import { SanitizeHtmlPipe } from "./pipes/sanitize-html.pipe";
import { TabIdService } from './services/tab-id.service';

const COMPONENTS = [TabsComponent, Tab, TabContent, TabTitle];

@NgModule({
  imports: [CommonModule],
  declarations: [COMPONENTS, SanitizeHtmlPipe],
  providers: [ TabIdService ],
  exports: [COMPONENTS]
})
export class TabsModule {}

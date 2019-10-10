import {
  Component,
  ContentChild,
  QueryList,
  AfterViewInit,
  ContentChildren,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from "@angular/core";
import { ReplaySubject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { TabIdService } from "../services/tab-id.service";
import { Tab } from "../directives/tab.directive";

@Component({
  selector: "tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsComponent implements AfterViewInit, OnDestroy {
  activeId$ = this.tabIdService.currentIdObs$;

  destroy$ = new ReplaySubject(1);

  @ContentChildren(Tab) tabs: QueryList<Tab>;

  constructor(
    private tabIdService: TabIdService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.tabs.changes
      .pipe(takeUntil(this.destroy$))
      .subscribe((list: QueryList<Tab>) => {
        if (!list.length) {
          this.tabIdService.startAgain();
        }

        if (!this.checkActiveId(list, this.tabIdService.plainValue)) {
          this.tabIdService.resetId();
        }

        this.cdRef.markForCheck();
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.cdRef.detach();
  }

  handleClickOnTab(id: string) {
    this.tabIdService.setId = id;
  }

  private checkActiveId(list: QueryList<Tab>, activeId): boolean {
    if (!list.length) {
      return false;
    }
    return !!list.filter(tab => tab.tabId === activeId).length;
  }
}

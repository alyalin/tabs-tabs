import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabIdService {
  private startNum = 0;
  private id$ = new BehaviorSubject<string>('tab-id-1');
  
  resetId() {
    this.id$.next('tab-id-1');
  }

  startAgain() {
    this.startNum = 0;
  }

  get generate() {
    return `tab-id-${this.startNum += 1}`;
  }

  get currentIdObs$(): Observable<string> {
    return this.id$.asObservable();
  }

  get plainValue(): string {
    return this.id$.getValue();
  }

  set setId(id: string) {
    this.id$.next(id);
  }
}
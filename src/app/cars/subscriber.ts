import {OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';

export abstract class Subscriber implements OnDestroy {
  private subs: Subscription[] = [];

  addSubs(...subs: Subscription[]) {
    this.subs.push(...subs);
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }
}

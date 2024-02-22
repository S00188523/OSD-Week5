import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private countSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private doubleCountSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  increment() {
    this.countSubject.next(this.countSubject.value + 1);
    this.updateDoubleCount();
  }

  decrement() {
    if (this.countSubject.value > 0) {
      this.countSubject.next(this.countSubject.value - 1);
      this.updateDoubleCount();
    }
  }

  getCount(): Observable<number> {
    return this.countSubject.asObservable();
  }

  getDoubleCount(): Observable<number> {
    return this.doubleCountSubject.asObservable();
  }

  private updateDoubleCount() {
    this.doubleCountSubject.next(this.countSubject.value * 2);
  }
}

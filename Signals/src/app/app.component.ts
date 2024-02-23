import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Week5-OSD"
  constructor(private counterService: CounterService) {}

  increment() {
    this.counterService.increment();
    console.log('Child 1 Count');
  }

  decrement() {
    this.counterService.decrement();
    console.log('Child 2 Double Count');
  }
}

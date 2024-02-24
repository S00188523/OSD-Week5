import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  doubleCount: number = 0;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.counterService.getDoubleCount().subscribe(doubleCount => {
      this.doubleCount = doubleCount;
      console.log('Child 2 doubleCount')
    });
  }
}

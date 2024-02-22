import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  count: number = 0;

  constructor(private counterService: CounterService) { }

  ngOnInit() {
    this.counterService.getCount().subscribe(count => {
      this.count = count;
    });
  }
}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { activity } from '../activity-builder.model';
@Component({
  selector: 'app-activity-pizza-builder',
  templateUrl: './activity-pizza-builder.component.html',
  styleUrls: ['./activity-pizza-builder.component.scss'],
})
export class ActivityPizzaBuilderComponent implements OnInit {
  count: number = 1;
  name: string;
  descr: string;
  img: string;
  obj = new activity(
    'Pizza',
    'Pizza is a savory dish of Italian origin consisting of a usually round flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as anchovies, mushrooms, onions, olives, pineapple, meat, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.[1] A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo',
    'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/10/22/original/San_Daniele.JPG'
  );
  items: activity[] = [this.obj];

  /*pizzachoice(item:activity){
    this.items.push(item);
  }*/

  constructor() {}

  ngOnInit() {}
}

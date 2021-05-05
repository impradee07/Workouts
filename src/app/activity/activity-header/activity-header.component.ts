import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { activity } from '../activity-builder.model';

@Component({
  selector: 'app-activity-header',
  templateUrl: './activity-header.component.html',
  styleUrls: ['./activity-header.component.scss']
})
export class ActivityHeaderComponent implements OnInit {
@Output () featureLoad = new EventEmitter<string>();
  constructor() { }

  onload(feature:string){
    this.featureLoad.emit(feature);
  }
  items:activity[];
  pizzachoice(item:activity){
    this.items.push(item);
  }
  ngOnInit() {
  }
  
  
  

}

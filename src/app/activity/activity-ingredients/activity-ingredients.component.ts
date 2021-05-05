import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ingredients } from '../activity-ingredients.model';
import { activity } from '../activity-builder.model';
@Component({
  selector: 'app-activity-ingredients',
  templateUrl: './activity-ingredients.component.html',
  styleUrls: ['./activity-ingredients.component.scss']
})
export class ActivityIngredientsComponent implements OnInit {
  pizza: ingredients[]=[];
  choice:string='';
  item1:string='';
  item2:string='';
  item3:string='';

  onitemt1(){
    this.item1='Tomato';
  }
  onitemf1(){
    this.item1='';
  }
  onitemt2(){
    this.item2='Capsicum';
  }

  onitemt3(){
    this.item3='Cheese';
  }
  onitemf2(){
    this.item2='';
  }
  onitemf3(){
    this.item3='';
  }
  burst(item:HTMLInputElement){
    this.choice=item.value;
  }
  items: activity;



  constructor() { }
  
  @Output () details=new EventEmitter<activity>();
  
  pizzachoice(){
    const obj=new activity('Pizza',this.choice+'\n'+this.item1+'\n'+this.item2+'\n'+this.item3,
    'https://images.indulgexpress.com/uploads/user/imagelibrary/2020/10/22/original/San_Daniele.JPG');
    
    this.details.emit(obj);
    
    console.log(obj);
    
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss'],
})
export class SideNavbarComponent implements OnInit {
  constructor() {}
  flag = 0;
  isCardView = false;
  ngOnInit(): void {}
  onClick(num: number) {
    this.flag = num;
    return this.flag;
  }
  cardView() {
    this.isCardView = !this.isCardView;
  }
}

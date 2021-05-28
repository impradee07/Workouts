import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isDrop: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  toggle(num: number) {
    this.isDrop = !this.isDrop;
    if (num == 1) {
      this.router.navigate(['/']);
    }
  }
  search(n) {}
}

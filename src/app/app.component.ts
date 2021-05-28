import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Weather widget';
  constructor(
    private router: Router,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}
  ngOnInit() {
    this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationEnd) {
        if (routerEvent.urlAfterRedirects.includes('auth')) {
          this.renderer.addClass(this.document.body, 'bg-login');
        } else {
          this.renderer.removeClass(this.document.body, 'bg-login');
        }
      }
    });
  }
}

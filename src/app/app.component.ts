import { Component, Renderer2 } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  previousUrl: string;
  isExpanded: boolean;
  order: string = 'id';

  constructor(private renderer: Renderer2, private router: Router, private authService: AuthService) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          if (this.previousUrl) {
            this.renderer.removeClass(document.body, this.previousUrl);
          }
          let currentUrlSlug = event.url.slice(1)
          if (currentUrlSlug) {
            this.renderer.addClass(document.body, currentUrlSlug);
          }
          this.previousUrl = currentUrlSlug;
        }
      });
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn()?true:false;
  }
}

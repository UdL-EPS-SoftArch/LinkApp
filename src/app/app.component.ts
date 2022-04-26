import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LinkApp';
  private routesWithoutContainer: string[];

  /**
   * Add your URL to 'routesWithoutContainer' list if you don't want the body of your page to have a container.
   * @param router App router
   */
  constructor(private router: Router) {
    this.router = router;
    this.routesWithoutContainer = [
      '/meets'
    ];
  }

  /**
   * @returns False if the current URL is contained in 'routesWithoutContainer' list
   */
  public includeContainer(): boolean {
    return !this.routesWithoutContainer.includes(this.router.url);
  }

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2>redirectTo Demo</h2>
    <router-outlet />
  `,
  styles: `
    :host {
      display: block;
      padding: 1rem;
    }

    h2 {
      margin-bottom: 1rem;
    }
  `
})
export class AppComponent {}

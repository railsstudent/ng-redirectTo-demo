import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pokermon',
  standalone: true,
  imports: [],
  template: `
    <p>
      pokermon works! {{ name() }}, {{ url() }}
    </p>
  `,
  styles: ``,
})
export default class PokermonComponent {
  name = input.required<string>();
  url = input.required<string>();
}

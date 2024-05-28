import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pokermon',
  standalone: true,
  imports: [],
  template: `
    <p>
      pokermon works!
    </p>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class PokermonComponent {

}

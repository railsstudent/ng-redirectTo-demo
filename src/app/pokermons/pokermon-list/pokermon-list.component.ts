import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PokermonService } from '../services/pokermon.service';

@Component({
  selector: 'app-pokermon-list',
  standalone: true,
  imports: [],
  template: `
    @for(p of pokemons(); track p.id) {
      <div>
        <p>id: {{ p.id }}</p>
        <p>name: {{ p.name }}</p>
      </div>
    }
  `,
  styles: ``,
})
export default class PokermonListComponent {
  pokemonService = inject(PokermonService);

  pokemons = toSignal(this.pokemonService.getPokemons(), { initialValue: [] });
}

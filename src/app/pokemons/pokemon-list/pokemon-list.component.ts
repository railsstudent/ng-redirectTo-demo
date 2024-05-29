import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container">
      @for(p of pokemons(); track p.name) {
        <div class="card">
          <p>Name: <a [routerLink]="['/pokemon-list', p.name]">{{ p.name }}</a></p>
        </div>
      }
    </div>
  `,
  styles: `
    div.container {
      display: flex;
      flex-wrap: wrap;  
    }

    div.card {
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: calc((100% - 2 * 1rem - 90px) / 3);

      padding: 1rem;
      border: 1px solid black;
    }

    p {
      margin-bottom: 1rem;
    }
  `,
})
export default class PokemonListComponent {
  pokemonService = inject(PokemonService);

  pokemons = toSignal(this.pokemonService.getPokemons(), { initialValue: [] });
}

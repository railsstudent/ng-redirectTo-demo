import { Component, effect, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonType } from '../types/pokemon.type';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if(pokemon(); as pokemon) {
      @if (pokemon) {
        <div>
          @if (pokemon.image)  {
            <div>
              <img alt='Pokemon image' [src]="pokemon.image" width="120" height="120" />
            </div>
          }
          <div class="row">
            <div>
              <label for="id">
                <span>Id: </span>
                <span id="id" name="id">{{ pokemon.id }}</span>
              </label>
            </div>
            <div>
              <label for="name">
                <span>Name: </span>
                <span id="name" name="name">{{ pokemon.name }}</span>
              </label>
            </div>
            <div>
              <label for="weight">
                <span>Weight: </span>
                <span id="weight" name="weight">{{ pokemon.weight }}</span>
              </label>
            </div>
            <div>
              <label for="height">
                <span>Height: </span>
                <span id="height" name="height">{{ pokemon.height }}</span>
              </label>
            </div>
          </div>       
        </div>
        <div>
          <a [routerLink]="'/pokermon-list'">Back</a>
        </div>
      }
    }
  `,
  styles: `
    div.row {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }
  `,
})
export default class PokermonComponent {
  name = input.required<string>();
  url = input.required<string>();
  service = inject(PokemonService);
  pokemon = signal<PokemonType | null>(null);

  constructor() {
    effect((cleanUp) => {
      const sub = this.service.getPokemon(this.url())
        .subscribe((result) => this.pokemon.set(result));

      cleanUp(() => sub.unsubscribe());
    });
  }

}

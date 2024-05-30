import { TitleCasePipe } from '@angular/common';
import { Component, effect, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokemonService } from '../services/pokemon.service';
import { PokemonType } from '../types/pokemon.type';

type PokemonTypeKeys = keyof PokemonType;

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [RouterLink, TitleCasePipe],
  template: `
    @if(pokemon() == null) {
      <p>{{ name() }} is not found.</p>
    } @else {
      @if (pokemon(); as pokemon) {
        <div>
          @if (pokemon?.image)  {
            <div>
              <img alt='Pokemon image' [src]="pokemon.image" width="120" height="120" />
            </div>
          }
          <div class="row">
            @for(key of keys; track key) {
              <div>
                <label [for]="key">
                  <span>{{ key | titlecase }}: </span>
                  <span [id]="key">{{ pokemon[key] }}</span>
                </label>
              </div>
            }
          </div>       
        </div>
      }
    }
    <hr />
    <div>
      <a [routerLink]="'/pokemon-list'">Back</a>
    </div>
  `,
  styles: `
    div.row {
      display: flex;
      justify-content: space-between;
    }

    hr {
      margin-bottom: 1rem;
    }
  `,
})
export default class PokermonComponent {
  name = input.required<string>();
  service = inject(PokemonService);
  pokemon = signal<PokemonType | null>(null);
  keys: PokemonTypeKeys[] = ['id', 'name', 'weight', 'height'];

  constructor() {
    effect((cleanUp) => {
      const sub = this.service.getPokemon(this.name())
        .subscribe((result) => this.pokemon.set(result));

      cleanUp(() => sub.unsubscribe());
    });
  }
}

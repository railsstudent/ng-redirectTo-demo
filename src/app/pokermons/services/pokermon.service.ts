import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PaginatedPokemons } from '../types/paginated-pokemons.type';
import { PokemonLink, PokemonType, RawPokemon } from '../types/pokemon.type';

const URL = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=10';

@Injectable({
  providedIn: 'root'
})
export class PokermonService {
  private readonly http = inject(HttpClient);

  getPokemons(): Observable<PokemonLink[]> {
    return this.http.get<PaginatedPokemons>(URL).pipe(map(({ results }) => results));
  }

  getPokemon(url: string): Observable<PokemonType> {
    return this.http.get<RawPokemon>(url)
      .pipe(
        map(({ name, id, weight, height, sprites }) => ({
          id,
          name,
          weight,
          height,
          image: sprites.front_shiny || '',
        })
      ));
  }
}

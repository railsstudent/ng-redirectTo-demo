import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { PaginatedPokemons } from '../types/paginated-pokemons.type';
import { PokemonLink, PokemonType, RawPokemon } from '../types/pokemon.type';

const POKEMON_URL = 'https://pokeapi.co/api/v2/pokemon';
const URL = `${POKEMON_URL}?offset=20&limit=10`;

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private readonly http = inject(HttpClient);

  getPokemons(): Observable<PokemonLink[]> {
    return this.http.get<PaginatedPokemons>(URL).pipe(
      map(({ results }) => results),
      catchError((err) => {
        console.error(err);
        return of([]);
      })
    );
  }

  getPokemon(name: string): Observable<PokemonType | null> {
    return this.http.get<RawPokemon>(`${POKEMON_URL}/${name}`)
      .pipe(
        map(({ name, id, weight, height, sprites }) => ({
          id,
          name,
          weight,
          height,
          image: sprites.front_shiny || '',
          })
        ),
        catchError((err) => {
          console.error(err);
          return of(null);
        })
      );
  }
}

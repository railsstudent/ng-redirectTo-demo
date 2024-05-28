import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable, switchMap, tap } from 'rxjs';
import { PaginatedPokemons } from '../types/paginated.type';
import { PokemonType } from '../types/pokemon.type';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=6';

@Injectable({
  providedIn: 'root'
})
export class PokermonService {
  private readonly http = inject(HttpClient);

  getPokemons(): Observable<PokemonType[]> {
    return this.http.get<PaginatedPokemons>(URL)
      .pipe(
        map((m) => m.results.map(({ url }) => this.http.get<PokemonType>(url))),
        switchMap((results) => forkJoin(results)),
        tap((pokemons) => console.log(pokemons)),
      );
  }
}

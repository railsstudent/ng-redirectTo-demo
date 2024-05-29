import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pokermon-list',
        loadComponent: () => import('./pokemons/pokemon-list/pokemon-list.component'),
        title: 'Pokermon List',
    }, 
    {
        path: 'pokermon-list/:name',
        loadComponent: () => import('./pokemons/pokemon/pokemon.component'),
        title: 'Pokermon',
    }, 
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pokermon-list'
    },
    {
        path: '**',
        redirectTo: 'pokermon-list'
    }
];

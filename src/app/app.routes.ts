import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pokemon-list',
        loadComponent: () => import('./pokemons/pokemon-list/pokemon-list.component'),
        title: 'Pokermon List',
    }, 
    {
        path: 'pokemon-list/:name',
        loadComponent: () => import('./pokemons/pokemon/pokemon.component'),
        title: 'Pokermon',
    }, 
    {
        path: 'pokermon-list',
        redirectTo: 'pokemon-list',
    },
    {
        path: 'pokermon-list/:name',
        redirectTo: ({ params }) => {
            const name = params?.['name'] || '';
            return name ? `/pokemon-list/${name}` : 'pokemon-list';
        }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'pokemon-list'
    },
    {
        path: '**',
        redirectTo: 'pokemon-list'
    }
];

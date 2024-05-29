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
        redirectTo: ({ queryParams, params }) => {
            const name = params['name'];
            const url = queryParams['url'];
            if (name && url) {
                return `/pokemon-list/${name}?url=${url}`;
            }

            return 'pokemon-list';
        }
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

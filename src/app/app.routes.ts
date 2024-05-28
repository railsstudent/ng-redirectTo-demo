import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pokermon-list',
        loadComponent: () => import('./pokermons/pokermon-list/pokermon-list.component')
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

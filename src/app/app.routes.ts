import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pokermon-list',
        loadComponent: () => import('./pokermons/pokermon-list/pokermon-list.component'),
        title: 'Pokermon List',
    }, 
    {
        path: 'pokermon/:id',
        loadComponent: () => import('./pokermons/pokermon/pokermon.component'),
        title: 'Pokermon'
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

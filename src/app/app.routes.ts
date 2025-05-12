import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  {
    path: 'accueil',
    loadComponent: () =>
      import('./accueil/accueil.component').then((m) => m.AccueilComponent),
  },
  {
    path: 'clients',
    loadComponent: () =>
      import('./clients/clients.component').then((m) => m.ClientsComponent),
  },
  {
    path: 'produits',
    loadComponent: () =>
      import('./produits/produits.component').then((m) => m.ProduitsComponent),
  },
  {
    path: 'factures',
    loadComponent: () =>
      import('./factures/factures.component').then((m) => m.FacturesComponent),
  },
  {
    path: 'reglements',
    loadComponent: () =>
      import('./reglements/reglements.component').then(
        (m) => m.ReglementsComponent
      ),
  },
];

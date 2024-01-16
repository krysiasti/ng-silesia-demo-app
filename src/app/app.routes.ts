import { Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'shopping-lists',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () => import('./products-view/products-view.routes'),
  },
  {
    path: 'shopping-lists',
    loadComponent: () =>
      import('./shopping-lists-view/index').then((c) => c.ShoppingListsViewComponent),
  },
  { path: '**', component: ErrorPageComponent },
];

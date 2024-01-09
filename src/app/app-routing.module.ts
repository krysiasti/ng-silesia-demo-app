import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shopping-lists',
    pathMatch: 'full',
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./products-view/products-view.module').then((m) => m.ProductsViewModule),
  },
  {
    path: 'shopping-lists',
    loadChildren: () =>
      import('./shopping-lists-view/shopping-lists-view.module').then(
        (m) => m.ShoppingListsViewModule,
      ),
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

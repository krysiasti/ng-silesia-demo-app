import { Route, Routes } from '@angular/router';

import { ProductsViewComponent } from './container/products-view.component';

export default [
  {
    path: '',
    component: ProductsViewComponent,
  },
  {
    path: ':id',
    component: ProductsViewComponent,
  },
] satisfies Route[];

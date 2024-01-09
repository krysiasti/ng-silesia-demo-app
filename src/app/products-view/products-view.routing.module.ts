import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from '../shared/error-page/error-page.component';
import { ProductsViewComponent } from './products-view.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsViewComponent,
  },
  {
    path: ':id',
    component: ProductsViewComponent,
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsViewRoutingModule {}

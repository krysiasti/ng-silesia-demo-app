import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorPageComponent } from '../shared/error-page/error-page.component';
import { ShoppingListsViewComponent } from './shopping-lists-view/shopping-lists-view.component';

const routes: Routes = [
  {
    path: '',
    component: ShoppingListsViewComponent,
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShoppingListViewRoutingModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../shared/shared.module';
import { ShoppingListViewRoutingModule } from './shopping-list-view.routing.module';

import { AddEditShoppingListComponent } from './add-edit-shopping-list/add-edit-shopping-list.component';
import { ShoppingListsHeaderComponent } from './shopping-lists-header/shopping-lists-header.component';
import { ShoppingListsViewComponent } from './shopping-lists-view/shopping-lists-view.component';

@NgModule({
  declarations: [
    ShoppingListsViewComponent,
    AddEditShoppingListComponent,
    ShoppingListsHeaderComponent,
  ],
  imports: [CommonModule, SharedModule, MatTableModule, ShoppingListViewRoutingModule],
})
export class ShoppingListsViewModule {}

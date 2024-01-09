import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../shared/shared.module';
import { ShoppingListViewRoutingModule } from './shopping-list-view.routing.module';

import { ShoppingListsService } from './shared/service/shopping-lists.service';

import { AddEditShoppingListComponent } from './add-edit-shopping-list/add-edit-shopping-list.component';
import { ShoppingListsViewComponent } from './shopping-lists-view/shopping-lists-view.component';

@NgModule({
  declarations: [ShoppingListsViewComponent, AddEditShoppingListComponent],
  imports: [CommonModule, SharedModule, MatTableModule, ShoppingListViewRoutingModule],
  providers: [ShoppingListsService],
})
export class ShoppingListsViewModule {}

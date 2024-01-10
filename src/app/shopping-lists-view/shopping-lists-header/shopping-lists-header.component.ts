import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-lists-header',
  templateUrl: './shopping-lists-header.component.html',
  styleUrls: ['./shopping-lists-header.component.scss'],
})
export class ShoppingListsHeaderComponent {
  @Output() openAddShoppingListForm = new EventEmitter<void>();
}

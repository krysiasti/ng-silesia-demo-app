import { Component, EventEmitter, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-shopping-lists-header',
  templateUrl: './shopping-lists-header.component.html',
  styleUrls: ['./shopping-lists-header.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class ShoppingListsHeaderComponent {
  @Output() openAddShoppingListForm = new EventEmitter<void>();
}

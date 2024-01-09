import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable, Subject, takeUntil } from 'rxjs';

import { SnackBarService } from '../../shared/service/snackbar.service';
import { ShoppingListsService } from '../shared/service/shopping-lists.service';

import { AddEditShoppingListComponent } from '../add-edit-shopping-list/add-edit-shopping-list.component';

import { ShoppingList } from '../shared/model/shopping-list.model';

@Component({
  selector: 'app-shopping-lists-view',
  templateUrl: './shopping-lists-view.component.html',
  styleUrls: ['./shopping-lists-view.component.scss'],
})
export class ShoppingListsViewComponent implements OnInit, OnDestroy {
  shoppingLists$!: Observable<ShoppingList[]>;

  private _destroy$ = new Subject<void>();

  constructor(
    private _shoppingListsService: ShoppingListsService,
    private _snackBarService: SnackBarService,
    private _dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.fetchShoppingLists();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  openAddShoppingListForm(): void {
    const dialogRef = this._dialog.open(AddEditShoppingListComponent, {
      width: '560px',
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (val) => {
          if (val) {
            this.fetchShoppingLists();
          }
        },
      });
  }

  openEditProductForm($event: Event, shoppingList: ShoppingList) {
    $event.stopPropagation();

    const dialogRef = this._dialog.open(AddEditShoppingListComponent, {
      width: '560px',
      data: shoppingList,
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (val) => {
          if (val) {
            this.fetchShoppingLists();
          }
        },
      });
  }

  deleteShoppingList($event: Event, listId: number): void {
    $event.stopPropagation();

    this._shoppingListsService
      .deleteShoppingList(listId)
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: () => {
          this._snackBarService.openSnackBar('Shopping list was deleted successfully');
          this.fetchShoppingLists();
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  fetchShoppingLists(): void {
    this.shoppingLists$ = this._shoppingListsService.fetchShoppingLists();
  }
}

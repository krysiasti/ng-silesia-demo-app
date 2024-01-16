import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { Subject, takeUntil } from 'rxjs';

import { SnackBarService } from '../../../shared/service/snackbar.service';
import { ShoppingListsService } from '../../shared/service/shopping-lists.service';

import { ShoppingList } from '../../shared/model/shopping-list.model';

@Component({
  selector: 'app-add-edit-shopping-list',
  templateUrl: './add-edit-shopping-list.component.html',
  styleUrls: ['./add-edit-shopping-list.component.scss'],
  standalone: true,
  imports: [
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class AddEditShoppingListComponent {
  formGroup = new FormGroup({
    name: new FormControl('', { nonNullable: false, validators: Validators.required }),
  });

  private _destroy$ = new Subject<void>();

  constructor(
    private _shoppingListsService: ShoppingListsService,
    private _snackBarService: SnackBarService,
    private _dialogRef: MatDialogRef<AddEditShoppingListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ShoppingList,
  ) {}

  ngOnInit(): void {
    this.formGroup.patchValue(this.data);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  addShoppingList(): void {
    if (this.formGroup.valid) {
      const successMessage = this.data
        ? 'Shopping list was updated successfully'
        : 'Shopping list was added successfully';

      const product = this.formGroup.value;

      (this.data
        ? this._shoppingListsService.editShoppingList(this.data.id, product as ShoppingList)
        : this._shoppingListsService.addShoppingList(product as ShoppingList)
      )
        .pipe(takeUntil(this._destroy$))
        .subscribe({
          next: () => {
            this._snackBarService.openSnackBar(successMessage);
            this._dialogRef.close(true);
          },
          error: (error) => {
            console.error(error);
          },
        });
    }
  }
}

import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import { Subject, takeUntil } from 'rxjs';

import { SnackBarService } from '../../../shared/service/snackbar.service';
import { ProductService } from '../../shared/service/product.service';

import { DialogProductData, Product } from '../../shared/model/product.model';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss'],
})
export class AddEditProductComponent implements OnInit, OnDestroy {
  formGroup = new FormGroup({
    name: new FormControl('', { nonNullable: false, validators: Validators.required }),
    quantity: new FormControl('', {
      nonNullable: false,
      validators: [Validators.required, Validators.min(1)],
    }),
    unit: new FormControl('', { nonNullable: false, validators: Validators.required }),
    description: new FormControl(''),
  });
  unitsList = this._productService.getUnitsList();

  private _destroy$ = new Subject<void>();

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _snackBarService: SnackBarService,
    private _dialogRef: MatDialogRef<AddEditProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogProductData,
  ) {}

  ngOnInit(): void {
    if (this.data.product) this.formGroup.patchValue(this.data.product);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  addEditProduct(): void {
    if (this.formGroup.valid) {
      const successMessage = this.data.product
        ? 'Product was updated successfully'
        : 'Product was added successfully';

      const product = this.data.shoppingListId
        ? { ...this.formGroup.value, listId: this.data.shoppingListId }
        : this.formGroup.value;

      (this.data.product
        ? this._productService.editProduct(this.data.product.id, product as Product)
        : this._productService.addProduct(product as Product)
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

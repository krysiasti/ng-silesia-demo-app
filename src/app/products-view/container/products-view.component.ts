import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Route } from '@angular/router';

import { Subject, takeUntil, tap } from 'rxjs';

import { SnackBarService } from '../../shared/service/snackbar.service';
import { ProductService } from '../shared/service/product.service';

import { AddEditProductComponent } from '../components/add-edit-product/add-edit-product.component';

import { Product } from '../shared/model/product.model';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss'],
})
export class ProductsViewComponent {
  dataSource!: MatTableDataSource<Product, MatPaginator>;
  displayedColumns: string[] = ['position', 'name', 'quantity', 'unit', 'description', 'actions'];
  shoppingListId!: string;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private _destroy$ = new Subject<void>();

  constructor(
    private _route: ActivatedRoute,
    private _productService: ProductService,
    private _snackBarService: SnackBarService,
    private _dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.shoppingListId = this._route.snapshot.params['id'] ?? null;
    this.fetchProducts();
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  filterProducts(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteProduct(product: Product): void {
    this._productService
      .deleteProduct(product)
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: () => {
          this._snackBarService.openSnackBar('Product was deleted successfully');
          this.fetchProducts();
        },
        error: (error) => {
          console.error(error);
        },
      });
  }

  fetchProducts(): void {
    this._productService
      .fetchProducts(this.shoppingListId)
      .pipe(
        tap((products) => {
          this.dataSource = new MatTableDataSource(products);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        }),
        takeUntil(this._destroy$),
      )
      .subscribe();
  }

  openAddProductForm(): void {
    const dialogRef = this._dialog.open(AddEditProductComponent, {
      width: '560px',
      data: { shoppingListId: this.shoppingListId },
    });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (val) => {
          if (val) {
            this.fetchProducts();
          }
        },
      });
  }

  openEditProductForm(product: Product) {
    const dialogRef = this._dialog.open(AddEditProductComponent, {
      width: '560px',
      data: { product, shoppingListId: this.shoppingListId },
    });

    dialogRef
      .afterClosed()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (val) => {
          if (val) {
            this.fetchProducts();
          }
        },
      });
  }
}

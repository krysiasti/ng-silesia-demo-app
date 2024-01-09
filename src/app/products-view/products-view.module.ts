import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { SharedModule } from '../shared/shared.module';
import { ProductsViewRoutingModule } from './products-view.routing.module';

import { ProductService } from './shared/service/product.service';

import { AddEditProductComponent } from './add-edit-product/add-edit-product.component';
import { ProductsViewComponent } from './products-view.component';

@NgModule({
  declarations: [ProductsViewComponent, AddEditProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductsViewRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSelectModule,
  ],
  providers: [ProductService],
})
export class ProductsViewModule {}

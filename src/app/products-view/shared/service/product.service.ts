import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { Product, ProductDto } from '../model/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  constructor(private _httpClient: HttpClient) {}

  getUnitsList(): string[] {
    return ['kg', 'szt', 'g', 'l', 'ml'];
  }

  fetchProducts(shoppingListId: string | null): Observable<Product[]> {
    const options = shoppingListId
      ? { params: new HttpParams().set('listId', shoppingListId) }
      : {};

    return this._httpClient.get<Product[]>('api/products', options);
  }

  addProduct(product: ProductDto): Observable<Product> {
    return this._httpClient.post<Product>('api/products', product);
  }

  editProduct(productId: number, product: Product): Observable<Product> {
    return this._httpClient.put<Product>(`api/products/${productId}`, product);
  }

  deleteProduct(product: Product): Observable<Product> {
    return this._httpClient.delete<Product>(`api/products/${product.id}`);
  }
}

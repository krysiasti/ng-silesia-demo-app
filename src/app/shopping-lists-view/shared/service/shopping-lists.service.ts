import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ShoppingList, ShoppingListDto } from '../model/shopping-list.model';

@Injectable()
export class ShoppingListsService {
  constructor(private _httpClient: HttpClient) {}

  fetchShoppingLists(): Observable<ShoppingList[]> {
    return this._httpClient.get<ShoppingList[]>('api/lists');
  }

  addShoppingList(list: ShoppingListDto): Observable<ShoppingList> {
    return this._httpClient.post<ShoppingList>('api/lists', list);
  }

  editShoppingList(listId: number, list: ShoppingList): Observable<ShoppingList> {
    return this._httpClient.put<ShoppingList>(`api/lists/${listId}`, list);
  }

  deleteShoppingList(listId: number): Observable<ShoppingList> {
    return this._httpClient.delete<ShoppingList>(`api/lists/${listId}`);
  }
}

export enum Unit {
  SZT = 'szt',
  KG = 'kg',
  G = 'g',
  L = 'l',
  ML = 'ml',
}

export interface ProductDto {
  name: string;
  quantity: string;
  description: string;
  unit: Unit;
  listId: number;
}

export interface Product extends ProductDto {
  id: number;
}

export interface DialogProductData {
  product?: Product;
  shoppingListId: string;
}

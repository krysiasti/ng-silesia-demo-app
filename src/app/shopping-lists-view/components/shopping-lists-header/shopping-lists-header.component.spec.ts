import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListsHeaderComponent } from './shopping-lists-header.component';

describe('ShoppingListsHeaderComponent', () => {
  let component: ShoppingListsHeaderComponent;
  let fixture: ComponentFixture<ShoppingListsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingListsHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShoppingListsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

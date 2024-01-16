import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditShoppingListComponent } from './add-edit-shopping-list.component';

describe('AddEditShoppingListComponent', () => {
  let component: AddEditShoppingListComponent;
  let fixture: ComponentFixture<AddEditShoppingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditShoppingListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddEditShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

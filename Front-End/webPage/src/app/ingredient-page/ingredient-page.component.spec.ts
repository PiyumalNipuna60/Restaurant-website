import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientPageComponent } from './ingredient-page.component';

describe('IngredientPageComponent', () => {
  let component: IngredientPageComponent;
  let fixture: ComponentFixture<IngredientPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientPageComponent]
    });
    fixture = TestBed.createComponent(IngredientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

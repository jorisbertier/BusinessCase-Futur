import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABasketComponent } from './a-basket.component';

describe('ABasketComponent', () => {
  let component: ABasketComponent;
  let fixture: ComponentFixture<ABasketComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ABasketComponent]
    });
    fixture = TestBed.createComponent(ABasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSecondCollectionComponent } from './card-second-collection.component';

describe('CardSecondCollectionComponent', () => {
  let component: CardSecondCollectionComponent;
  let fixture: ComponentFixture<CardSecondCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSecondCollectionComponent]
    });
    fixture = TestBed.createComponent(CardSecondCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

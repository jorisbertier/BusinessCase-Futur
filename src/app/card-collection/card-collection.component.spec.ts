import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCollectionComponent } from './card-collection.component';

describe('CardCollectionComponent', () => {
  let component: CardCollectionComponent;
  let fixture: ComponentFixture<CardCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCollectionComponent]
    });
    fixture = TestBed.createComponent(CardCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

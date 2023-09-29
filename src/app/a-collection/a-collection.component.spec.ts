import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACollectionComponent } from './a-collection.component';

describe('ACollectionComponent', () => {
  let component: ACollectionComponent;
  let fixture: ComponentFixture<ACollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ACollectionComponent]
    });
    fixture = TestBed.createComponent(ACollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
